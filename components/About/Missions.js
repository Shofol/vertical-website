import React from 'react'
import Mission from './Mission';

const Missions = ({ missions }) => {

    return (
        <div className="m-auto max-w-screen-xl flex flex-col lg:flex-row mt-24 lg:mt-0 lg:space-x-8">
            <div className="px-12 flex-1 mb-8 lg:mb-0">
                <h2 className="text-vert-blue text-sm font-bold">Mission</h2>
                <h3 className="text-vert-green font-bold text-4xl leading-tight">
                    Health Tech Should be for the Many not the Few but Regulations &
                    Lack of Local Knowledge hold back deployments</h3>
            </div>
            <div className="px-12 flex-1 flex flex-col space-y-8">
                {
                    missions.map(
                        mission => { return <Mission mission={mission} key={mission.fields.title} /> }
                    )
                }

            </div>
        </div>
    )
}



export default Missions
