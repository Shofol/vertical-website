/* eslint-disable react/display-name */
import React from 'react'
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image'


const renderOptions = {

    renderNode: {
        [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
            if (node.data.target.sys.contentType.sys.id === "videoEmbed") {

                return (
                    <div className="mt-8 rounded-3xl relative">
                        <video controls className="rounded-3xl">
                            <source src={node.data.target.fields.video.fields.file.url} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    // <video
                    //     src={node.data.target.fields.video.fields.file.url}
                    //     height="28rem"
                    //     width="100%"
                    //     title={node.data.target.fields.video.fields.title}
                    //     allowFullScreen={true}
                    // />

                );
            }
            if (node.data.target.sys.contentType.sys.id === "qoutation") {
                return (<p className="italic">{node.data.target.fields.quotation.content[0].content[0].content[0].value}</p>)
            }
            if (node.data.target.sys.contentType.sys.id === "dualImage") {
                return (
                    <div className="flex justify-center my-16 space-x-2 lg:space-x-10" >
                        <div>
                            <Image
                                src={`https://${node.data.target.fields.image1.fields.file.url}`}
                                height={460}
                                width={385}
                                alt={node.data.target.fields.image1.fields.description}
                                className="rounded-3xl"
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </div>
                        <div>
                            <Image
                                src={`https://${node.data.target.fields.image2.fields.file.url}`}
                                height={460}
                                width={385}
                                alt={node.data.target.fields.image2.fields.description}
                                className="rounded-3xl"
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </div>
                    </div>
                );
            }
        },
        [BLOCKS.OL_LIST]: (node, children) => {
            return (<ol className="list-decimal">
                {children}
            </ol>);
        },
        [BLOCKS.UL_LIST]: (node, children) => {
            return (<ul className="list-disc">
                {children}
            </ul>);
        },
        [BLOCKS.HEADING_2]: (node, children) => {
            return (<h2 className="mt-16 mb-8" id={node.content[0].value.toLowerCase().split(' ').join('_')}>{children}</h2>)
        },
        [BLOCKS.HEADING_4]: (node, children) => {
            return (<h4 className="text-vert-blue mt-8 mb-5">{children}</h4>)
        },
        [INLINES.HYPERLINK]: (node, children) => {
            return (<a href={node.data.uri} target="_blank" rel="noreferrer">{node.content[0].value}</a>)
        },
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
            // render the EMBEDDED_ASSET as you need
            return (
                <div className="my-16 w-full h-48 lg:h-112 relative">
                    <Image
                        src={`https://${node.data.target.fields.file.url}`}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        alt={node.data.target.fields.description}
                        className="rounded-3xl"
                        quality={100}
                    />
                </div>
            );
        },

    },
    renderText: text => {
        return text.split('\n').reduce((children, textSegment, index) => {
            return [...children, index > 0 && <br key={index} />, textSegment];
        }, []);
    },

};

const RenderRichText = ({ content }) => {

    return (
        <>
            {documentToReactComponents(content, renderOptions)}
        </>
    )
}

export default RenderRichText
