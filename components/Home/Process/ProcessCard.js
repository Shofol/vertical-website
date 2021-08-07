import React from 'react'
import Image from 'next/image';
import Paragraph from '../../Utilities/Paragraph';

const ProcessCard = ({ process }) => {
    const { imgWidth, imgHeight, image, heading, description } = process;
    return (
        <div className="bg-vert-green-lighter rounded-3xl p-8 max-w-sm flex-1">
            <Image width={imgWidth} height={imgHeight} alt={heading} src={image} />
            <h3 className="text-xl text-vert-blue font-bold mb-2 mt-5">{heading}</h3>
            <Paragraph text={description} />
        </div>
    )
}

export default ProcessCard
