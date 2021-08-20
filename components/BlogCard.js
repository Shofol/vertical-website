import React from 'react'
import Image from 'next/image'
// import styles from '../styles/content.module.css';

const BlogCard = ({ article }) => {

    return (
        <div className="rounded-3xl max-w-xs lg:max-w-sm bg-white flex flex-col flex-none mb-6">
            <div className="w-full h-44 relative">
                <Image
                    src={`https://${article.fields.coverImage.fields.file.url}`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt={'as'}
                    className="rounded-tl-3xl rounded-tr-3xl"
                    quality={100}
                />
                <div className="absolute top-5 left-5 bg-vert-green text-white px-3 py-1 rounded-2xl">Category</div>
            </div>
            <div className={'w-16 h-16 -mt-7 ml-4 userImgPolygon'} style={{ background: `center / cover url(${article.fields.writerImage.fields.file.url}), #fff` }}></div>
            <div className="px-7 py-5">
                <div className="pr-6">
                    <h4 className="mb-6">{article.fields.title}</h4>
                    <p>{`${article.fields.excerpt.substring(0, 100)}...`}</p>
                    <a href={`/blog/articles/${article.fields.slug}`} passHref className="flex items-center my-6"><div className="w-3 h-px bg-vert-blue mr-2"></div>Read more</a>
                </div>

                <div className="w-full bg-vert-green-light" style={{ height: '2px' }}></div>
                <div className="flex items-center text-black my-6 text-sm">
                    <p>{article.fields.writer}</p>
                    <div className="h-1 w-1 rounded-full bg-black mx-2"></div>
                    <p>{new Date(article.fields.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
            </div>

        </div>
    )
}

export default BlogCard
