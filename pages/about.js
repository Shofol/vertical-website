import React from 'react'
import Hero from '../components/About/Hero'
import Missions from '../components/About/Missions'
import { createClient } from 'contentful';
import Vision from '../components/About/Vision';
import Team from '../components/About/Team';

const About = ({ missions, visions, members }) => {
    return (
        <div>
            <Hero />
            <Missions missions={missions} />
            <Vision visions={visions} />
            <Team members={members} />
        </div>
    )
}

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: 'master',
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    host: 'preview.contentful.com',
});


export const getStaticProps = async ({ params }) => {
    const res = await client.getEntries({
        content_type: 'mission',
    })

    const visionRes = await client.getEntries({
        content_type: 'vision',
    })

    const teamRes = await client.getEntries({
        content_type: 'team',
    })


    return {
        props: { missions: res.items, visions: visionRes.items, members: teamRes.items }
    }

}

export default About
