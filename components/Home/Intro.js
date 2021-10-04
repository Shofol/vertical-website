import React from 'react'
import Headline from '../Utilities/Headline'
import Paragraph from '../Utilities/Paragraph'
import SubHeading from '../Utilities/SubHeading'
import Image from 'next/image'

const Intro = () => {
    return (
        <div className="mt-24 lg:mt-60 mx-auto flex flex-col items-center text-center max-w-xl ">
            <div className="mb-16 px-5 lg:px-0">
                <Headline text={'Who we arE'} />
                <SubHeading text={'Digital Health expertise turns compliance in an unfair advantage'} />
                <Paragraph text={'Vertrical helps fast growing digital health companies deploy microservices that follow best practices in patient data management. Our customers handle sensitive patient data and comply with regulations like:'} />
            </div>
            <div className="grid grid-cols-3 w-full">
                <div className="flex flex-col items-center">
                    <Image src="/hipaa.png" width={90} height={90} alt="HIPAA" />
                    <span className="text-vert-blue font-bold mt-6">HIPAA</span>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/ccpa.svg" width={90} height={90} alt="CCPA" />
                    <span className="text-vert-blue font-bold mt-6">CCPA</span>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/gdpr.png" width={90} height={90} alt="GDPR" />
                    <span className="text-vert-blue font-bold mt-6">GDPR</span>
                </div>
            </div>
        </div>
    )
}

export default Intro
