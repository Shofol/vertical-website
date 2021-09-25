import Meta from '../components/Utilities/Meta';
import Hero from '../components/About/Hero';
import styles from '../styles/content.module.css';
import RenderRichText from '../components/Utilities/RenderRichText'

import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: 'master',
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    host: 'preview.contentful.com',
});

export const getStaticProps = async ({ params }) => {
    const res = await client.getEntries({
        content_type: 'legal',
    })
    return {
        props: { legal: res.items[0] }
    }

}

export default function Legal({ legal }) {
    return (
        <>
        <div className={styles.content} >
            <div className={styles.header}>
                <h1>{legal.fields.title}</h1>
            </div>
            <div className="m-auto max-w-screen-xl flex flex-col lg:flex-row">
                <div className="flex-2 py-12 lg:py-20 px-12 lg:pr-20">
                    <RenderRichText content={legal.fields.content} />
                </div>
            </div>
        </div>
        </>
    )
}