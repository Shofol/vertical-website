import React from 'react'

const SubHeading = ({ text }) => {


    function createMarkup() {
        return { __html: `${text}` };
    }

    return (
        <h2 className="text-4xl font-bold text-vert-green mb-8" dangerouslySetInnerHTML={createMarkup()}></h2>
    )
}

export default SubHeading
