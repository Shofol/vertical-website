import React from 'react'

const Mission = ({ mission }) => {
    return (
        <div className="bg-vert-green-lighter p-8 rounded-3xl">
            <img
                src={`https://${mission.fields.image.fields.file.url}`}
                alt={mission.fields.image.fields.title}
                width={142}
                height={94} />
            <h2 className="text-xl text-vert-blue font-bold mt-8 mb-5">{mission.fields.title}</h2>
            <p className="text-vert-green">{mission.fields.description}</p>
        </div>
    )
}

export default Mission
