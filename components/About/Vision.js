import React, { useState } from 'react'
import Image from 'next/image'
import styles from './About.module.css'

const Vision = ({ visions }) => {

    const [currentVision, setCurrentVision] = useState(0);

    const handleNext = () => {
        setCurrentVision(currentVision + 1 > visions.length - 1 ? 0 : currentVision + 1);
    }

    const handlePrev = () => {
        setCurrentVision(currentVision - 1 < 0 ? visions.length - 1 : currentVision - 1);
    }

    return (
        <div className="px-12 flex flex-col lg:flex-row mx-5 mt-12 lg:mx-20 lg:mt-32">
            <div className="m-auto max-w-xl flex-1 lg:pr-10 lg:py-32">
                <h2 className="text-vert-blue text-sm font-bold">Vision</h2>
                <h3 className="text-vert-green font-bold text-4xl leading-tight">Our Company Vision</h3>
                <p className="text-vert-green font text-xl mt-8 mb-12">We are a global team dedicated to helping digital health companies globalise and address global challenges.</p>
                {
                    visions.map((vision, index) => {
                        return <div key={vision.fields.title}>
                            <button className="cursor-pointer flex items-start lg:items-center" onClick={() => { setCurrentVision(index) }}>
                                {index === currentVision &&
                                    <Image src="/shape-underlign-our-company.svg" width={30} height={20} alt="selection mark" />
                                }
                                <p className={"text-vert-blue ml-2 " +
                                    (index === currentVision ? 'font-bold' : 'font-normal')}>{vision.fields.title}</p>
                            </button>
                            {index === currentVision && <p className="lg:hidden text-vert-green-dark font-bold  transition-opacity duration-400 mt-8">{vision.fields.content}</p>}
                            <div className="h-px bg-vert-green-light w-full my-6"></div>

                        </div>
                    })
                }

            </div>
            <div className="m-auto my-0 max-w-5xl flex-1 hidden lg:block">
                <div className={"lg:ml-16 px-16 py-20 xl:py-44 h-full " + styles.vision}>
                    <div className="relative h-full">
                        {
                            visions.map((vision, index) => {
                                return <div className="absolute inset-0 h-full" key={vision.fields.title}>
                                    <p className={"text-vert-green-dark transition-opacity duration-1000 "
                                        + (index === currentVision ? 'opacity-1' : ' opacity-0')}>{vision.fields.content}</p>
                                </div>
                            })
                        }
                        <div className="flex absolute bottom-3 left-0">
                            <button className="bg-vert-blue p-3 rounded-lg flex items-center mr-2" onClick={() => handlePrev()}>
                                <Image src="/left.svg" width={14} height={14} alt="left icon" />
                            </button>
                            <button className="bg-vert-blue p-3 rounded-lg flex items-center" onClick={() => handleNext()}>
                                <Image src="/right.svg" width={14} height={14} alt="left icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision
