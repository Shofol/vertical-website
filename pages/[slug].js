import { createClient } from 'contentful';
import styles from '../styles/content.module.css';
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import Share from '../components/Utilities/Share'
import RenderRichText from '../components/Utilities/RenderRichText'
import Meta from '../components/Utilities/Meta';


export default function Cornerstone({ content }) {
    console.log(content);
    const [headerTexts, setHeaderTexts] = useState([]);
    const [showContents, setShowContents] = useState(true);
    const ref = useRef(null);

    const [introContent, setIntroContent] = useState(null);

    useEffect(() => {
        const filterdContent = content.fields.pageContent.content.filter(ct => ct.nodeType === "embedded-entry-block" && ct.data.target.sys.contentType.sys.id === 'introduction')
        if (filterdContent.length > 0) {
            setIntroContent(filterdContent[0].data.target.fields.introduction.content);
        }
    }, [content]);


    useEffect(() => {
        const headers = Array.from(ref.current.querySelectorAll('h2'));
        setHeaderTexts(headers.map(header => header.innerText));
        if (+window.innerWidth <= 768) {
            setShowContents(false);
        }
    }, []);

    const handleScroll = (text) => {
        const yOffset = -400;
        const element = document.getElementById(text.toLowerCase().split(' ').join('_'));
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
        if (+window.innerWidth <= 768) {
            setShowContents(false);
        }
    }


    return (
        <>
            <Meta title={content.fields.title} />
            <div className={styles.content} >
                <div className={styles.header}>
                    <h1>{content.fields.title}</h1>
                </div>
                <div className="m-auto max-w-screen-xl flex flex-col lg:flex-row">
                    <div className="flex-1 sticky top-0 z-10 bg-white">
                        <div className="bg-vert-green-lighter mx-5 mt-14 mb-4 lg:mt-20 lg:mx-20 lg:mb-8 px-6 p-4 lg:p-8 rounded-3xl">
                            <div className="flex items-center">
                                <Image
                                    src={`/table-of-contents.svg`}
                                    height={47}
                                    width={42}
                                    alt="table of contents icon"
                                />
                                <p className="font-bold flex-1 text-xl ml-2">Table of Contents</p>
                                <button className="flex lg:hidden items-center" onClick={() => setShowContents(!showContents)}>
                                    <Image
                                        src={`/arrow-dropdown.svg`}
                                        height={20}
                                        width={10}
                                        alt="table of contents dropdown icon"
                                    />
                                </button>
                            </div>
                            {showContents && <ul className={styles.tableOfContent}>
                                {headerTexts.map((text, index) => {
                                    return <li className="mt-3" key={index}> <button className="text-left" onClick={() => { handleScroll(text) }}>{text}</button></li>
                                })}
                            </ul>}
                        </div>
                        <div className="hidden lg:block">
                            <Share links={content.fields.socialLinks} />
                        </div>
                    </div>

                    <div className="flex-2 py-12 lg:py-20 px-5 lg:pr-20" ref={ref}>
                        {introContent && <div className="font-kumbhsans text-lg">
                            <RenderRichText content={{ data: {}, nodeType: 'document', content: introContent }} />
                        </div>}
                        <RenderRichText content={content.fields.pageContent} />
                    </div>
                    <div className="block lg:hidden">
                        <Share links={content.fields.socialLinks} />
                    </div>
                </div>
            </div>
        </>
    )
}



const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: 'master',
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    host: 'preview.contentful.com',
});


export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "cornerstone"
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
        content_type: 'cornerstone',
        'fields.slug': params.slug
    })
    return {
        props: { content: items[0] }
    }

}
