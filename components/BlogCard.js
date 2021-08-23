import React from 'react'
// import styles from '../styles/content.module.css';

const BlogCard = ({ article }) => {

    return (
        <div className="rounded-3xl max-w-xs lg:max-w-sm bg-white flex flex-col flex-none mb-6">
            <div className="w-full h-44 relative">
                {article.fields.coverImage && <img
                    src={`https://${article.fields.coverImage.fields.file.url}`}
                    alt='as'
                    className="rounded-tl-3xl rounded-tr-3xl"
                    style={{ width: '384px', height: '176px', objectFit: 'cover', boxSizing: 'border-box' }}
                />}
                <div className="absolute top-5 left-5 bg-vert-green text-white px-3 py-1 rounded-2xl">Category</div>
            </div>
            {article.fields.writerImage && <div className={'w-16 h-16 -mt-7 ml-4 userImgPolygon'} style={{ background: `center / cover url(${article.fields.writerImage.fields.file.url}), #fff` }}></div>}
            <div className="px-7 py-5 z-20">
                <div className="pr-6 z-20 xl:h-72">
                    {article.fields.title && <h4 className="mb-6">{article.fields.title}</h4>}
                    {article.fields.excerpt && <p>{`${article.fields.excerpt.substring(0, 100)}...`}</p>}
                    {article.fields.slug && <a href={`/articles/${article.fields.slug}`} passHref className="flex items-center my-6"><div className="w-3 h-px bg-vert-blue mr-2"></div>Read more</a>}
                </div>
                <div className="w-full bg-vert-green-light z-20" style={{ height: '2px'}}></div>
                <div className="flex items-center my-6 text-sm text-#002B56">
                    {article.fields.writer && <p>{article.fields.writer}</p>}
                    <div className="h-1 w-1 rounded-full bg-#1B6AE3 mx-2"></div>
                    {article.fields.date && <p>{new Date(article.fields.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>}
                </div>
            </div>

        </div>
    )
}

export default BlogCard
