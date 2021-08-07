import React from 'react'

const Paragraph = ({ text }) => {

    function createMarkup() {
        return { __html: `${text}` };
    }

    return (
        <p className="text-base text-vert-green" dangerouslySetInnerHTML={createMarkup()}></p>
    )
}

export default Paragraph
