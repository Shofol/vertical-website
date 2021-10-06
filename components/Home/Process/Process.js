import React from 'react'
import Headline from '../../Utilities/Headline'
import Paragraph from '../../Utilities/Paragraph'
import SubHeading from '../../Utilities/SubHeading'
import Contact from '../../Utilities/Contact'
import ProcessCard from './ProcessCard'
import styles from '../Home.module.css'

const Process = () => {

    const processes = [
        {
            id: 1,
            imgWidth: '160px',
            imgHeight: '178px',
            image: '/illu-start.svg',
            heading: 'Start with why',
            description: 'We interview you to understand your market and who are you targeting to understand what regulations and constraints apply.'
        },
        {
            id: 2,
            imgWidth: '205px',
            imgHeight: '178px',
            image: '/illu-audit.svg',
            heading: 'Audit your software',
            description: 'Our Digital Health experts interview and study your code to understand your technology’s strengths and weaknesses.'
        },
        {
            id: 3,
            imgWidth: '160px',
            imgHeight: '178px',
            image: '/illu-draft.svg',
            heading: 'Draft a software roadmap',
            description: 'We discuss a roadmap over 6 - 12 months which prioritizes your technical tasks based on your business needs.'
        }
    ]


    return (
        <div className="mt-24 lg:mt-32 mx-auto flex flex-col items-center text-center">
            <div className="max-w-xl mb-16 px-5 lg:px-0">
                <Headline text={'How we work'} />
                <SubHeading text={'From software <br/> leadership to commit'} />
                <Paragraph text={'Vertrical follows a rigorous but agile process to integrate our product owners, business analysts, technical leads and engineers within your teams seamlessly.'} />
            </div>
            <div className={styles.processBg}>
                <div className="-mt-260 md:-mt-48 mx-4 lg:mx-0">
                    <div className="flex flex-col lg:flex-row space-y-10 lg:space-x-10 lg:space-y-0 justify-center items-center lg:items-stretch">
                        {
                            processes.map(
                                process => { return <ProcessCard process={process} key={process.id} /> }
                            )
                        }
                    </div>
                    <h2 className="text-4xl text-vert-green-dark font-bold mb-8 mt-32">Audit your <br className="lg:hidden" /> Health  Tech software <br /> for security and compliance</h2>
                    <Contact classes={'bg-vert-blue py-3 px-6 mb-24 lg:mb-36'} text={'Request an audit'} />
                </div>
            </div>
        </div>
    )
}

export default Process
