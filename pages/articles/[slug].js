import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link';

import { createClient } from 'contentful';
import styles from '../../styles/content.module.css';
import Share from '../../components/Utilities/Share'
import RenderRichText from '../../components/Utilities/RenderRichText'
import BlogCard from '../../components/BlogCard';
import Meta from '../../components/Utilities/Meta';


const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: 'master',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    host: 'preview.contentful.com',
});


export default function Article({ contents, content }) {

    const [headerTexts, setHeaderTexts] = useState([]);
    const [showContents, setShowContents] = useState(true);
    const [otherArticles, setOtherArticles] = useState([]);
    const [prevArticle, setPrevArticle] = useState(null);
    const [nextArticle, setNextArticle] = useState(null);
    const ref = useRef(null);

    const [introContent, setIntroContent] = useState(null);

    useEffect(() => {
        const filterdContent = content.fields.pageContent.content.filter(ct => ct.nodeType === "embedded-entry-block" && ct.data.target.sys.contentType.sys.id === 'introduction')
        if (filterdContent.length > 0) {
            setIntroContent(filterdContent[0].data.target.fields.introduction.content);
        }
    }, [content]);

    useEffect(() => {

        if (contents.length > 1) {
            let tempContetns = [];
            const currentIndex = contents.findIndex(item => item.fields.slug === content.fields.slug);

            const prevIndex = (currentIndex - 1) < 0 ? contents.length - 1 : currentIndex - 1;
            setPrevArticle(contents[prevIndex]);

            const nextIndex = (currentIndex + 1) > contents.length - 1 ? 0 : currentIndex + 1;
            setNextArticle(contents[nextIndex]);

            let incrementIdex = currentIndex + 1;
            for (let i = 0; i < 3; i++) {
                if (incrementIdex === contents.length) { incrementIdex = 0 }
                tempContetns = [...tempContetns, contents[incrementIdex]];
                incrementIdex++;
            }
            setOtherArticles(tempContetns);
        }
    }, [contents, content.fields.slug])

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
            <Meta title={content.fields.title} description={content.fields.excerpt} />
            <div className={styles.content} >
                <div className={styles.blogHeader}>
                    {content.fields.title && <h1>{content.fields.title}</h1>}
                </div>
                <div className="flex flex-col lg:flex-row max-w-screen-xl m-auto">
                    <div className="flex-1 sticky top-0 z-10 bg-white">
                        {content.fields.title && <p className={"text-vert-blue mt-14 lg:mt-20 mb-5 mx-5 lg:mx-20 " + (styles.breadCrumb)}><strong>{content.fields.title}</strong></p>}
                        <div className="bg-vert-green-lighter mx-5 lg:mx-20 mb-4 lg:mb-8 px-6 p-4 lg:p-8 rounded-3xl">
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
                        {content.fields.socialLinks && <div className="hidden lg:block">
                            <Share links={content.fields.socialLinks} />
                        </div>}
                    </div>
                    <div className="flex-2 pt-12 lg:py-20 px-5 lg:pr-20" ref={ref}>
                        {content.fields.blogContent && <>
                            {introContent && <div className="font-kumbhsans text-lg">
                                <RenderRichText content={{ data: {}, nodeType: 'document', content: introContent }} />
                            </div>}
                            <RenderRichText content={content.fields.blogContent} />
                        </>}
                    </div>
                </div>
                <div className="flex justify-between mt-16 mb-20 lg:mb-32 max-w-screen-xl m-auto">
                    {prevArticle && <div className="flex items-center lg:items-start">
                        <Link href={prevArticle.fields.slug} passHref >
                            <button className="bg-vert-blue p-4 rounded-xl flex items-center mr-5">
                                <Image src="/left.svg" width={14} height={14} alt="left icon" />
                            </button>
                        </Link>
                        <div className="text-vert-green max-w-xs">
                            <p className="font-bold">Previous</p>
                            <p className="hidden lg:block">{prevArticle.fields.title}</p>
                        </div>
                    </div>}
                    {nextArticle && <div className="flex items-center lg:items-start">
                        <div className="text-vert-green max-w-xs text-right">
                            <p className="font-bold">Next</p>
                            <p className="hidden lg:block">{nextArticle.fields.title}</p>
                        </div>
                        <Link href={nextArticle.fields.slug} passHref >
                            <button className="bg-vert-blue p-4 rounded-xl flex items-center ml-5">
                                <Image src="/right.svg" width={14} height={14} alt="left icon" />
                            </button>
                        </Link>
                    </div>}
                </div>

                {otherArticles.length > 0 && <> <div className="bg-vert-green-lightest py-12 lg:py-32">
                    <h2 className="text-center mb-8">You may also like</h2>
                    <div className="flex flex-col items-center">
                        <div className=" flex flex-col xl:flex-row justify-center xl:space-x-5">
                            {
                                otherArticles.map(article => {
                                    return <BlogCard article={article} key={article.fields.slug} />
                                })
                            }
                        </div>
                    </div>

                </div>
                    {content.fields.socialLinks && <div className="block lg:hidden mt-12">
                        <Share links={content.fields.socialLinks} />
                    </div>}
                    <div className="hidden lg:block bg-vert-green-lightest h-40 w-full -mb-40"></div></>}
            </div>
        </>
    )

}
export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "blogPost"
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

    const res = await client.getEntries({
        content_type: "blogPost"
    })

    const items = res.items.filter(item => item.fields.slug === params.slug);

    // await client.getEntries({
    //     content_type: 'blogPost',
    //     'fields.slug': params.slug
    // })

    return {
        props: { contents: res.items, content: items[0] }
    }

}
