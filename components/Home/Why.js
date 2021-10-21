import React, { useState, useEffect } from 'react'
import Headline from '../Utilities/Headline'
import Paragraph from '../Utilities/Paragraph'
import SubHeading from '../Utilities/SubHeading'
import Link from 'next/link'
import Image from 'next/image'
import TeamBg from '../../public/team.jpeg'
import styles from './Home.module.css'
import { animated, useTransition } from "react-spring";


const CLOUD_NUM = 3;
const LANG_NUM = 7;
const SCM_NUM = 3;
const DEVOPS_NUM = 5;

const Why = () => {

    const [showCloud, setShowCloud] = useState(0);
    const [showLang, setShowLang] = useState(0);
    const [showSCM, setSCM] = useState(0);
    const [showDevOps, setShowDevOps] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setShowCloud(showCloud + 1);
        }, 3200);
        setTimeout(() => {
            setShowLang(showLang + 1);
        }, 3800);
        setTimeout(() => {
            setSCM(showSCM + 1);
        }, 4600);
        setTimeout(() => {
            setShowDevOps(showDevOps + 1);
        }, 4200);
    }, [showCloud, showLang, showSCM, showDevOps]);

    const cloudItems = [
        {
            image: '/aws.svg',
            width: 100,
            height: 64,
            alt: 'aws'
        },
        {
            image: '/azure.svg',
            width: 108,
            height: 31,
            alt: 'azure'
        },
        {
            image: '/gcp.svg',
            width: 120,
            height: 64,
            alt: 'gcp'
        }
    ];


    const langItems = [
        {
            image: '/tsjs.svg',
            width: 108,
            height: 55,
            alt: 'javascript and typescript'
        },
        {
            image: '/node.svg',
            width: 108,
            height: 31,
            alt: 'nodejs'
        },
        {
            image: '/react.svg',
            width: 120,
            height: 64,
            alt: 'reactjs'
        },
        {
            image: '/python.svg',
            width: 120,
            height: 64,
            alt: 'python'
        },
        {
            image: '/java.svg',
            width: 108,
            height: 64,
            alt: 'java'
        },
        {
            image: '/spring.svg',
            width: 60,
            height: 64,
            alt: 'spring boot'
        },
        {
            image: '/flutter.svg',
            width: 50,
            height: 64,
            alt: 'flutter'
        }
    ];


    const scmItems = [
        {
            image: '/github.svg',
            width: 100,
            height: 64,
            alt: 'github'
        },
        {
            image: '/gitlab.svg',
            width: 60,
            height: 31,
            alt: 'gitlab'
        },
        {
            image: '/circleci.svg',
            width: 120,
            height: 64,
            alt: 'circleci'
        }
    ];

    const devOpsItems = [
        {
            image: '/docker.svg',
            width: 120,
            height: 64,
            alt: 'docker'
        },
        {
            image: '/terraform.svg',
            width: 120,
            height: 64,
            alt: 'terraform'
        },
        {
            image: '/elk-stack.svg',
            width: 80,
            height: 31,
            alt: 'elk-stack'
        },
        {
            image: '/mongo.svg',
            width: 120,
            height: 64,
            alt: 'mongodb'
        },
        {
            image: '/kafka.svg',
            width: 120,
            height: 64,
            alt: 'kafka'
        }
    ];


    return (
        <div>
            <div className={"max-w-screen overflow-x-hidden flex flex-col items-start text-left relative overflow-y-hidden"}>
                <div className="m-auto max-w-7xl px-5 w-screen lg:px-20 flex flex-col lg:flex-row justify-center items-start lg:items-center py-24 lg:py-24">
                    <div className="flex-1">
                        <Headline text={'Why choose us'} />
                        <SubHeading text={'Integrate the Health, <br class="hidden lg:block"/> Insurance and Pharma ecosystems'} />
                        <Paragraph text={'Our teams have the experience and expertise to allow your company to focus on value, while we focus on crafting and maintaining this complex but essential data plumbing.'} />
                        <div className="flex mt-8 text-vert-blue items-center">
                            <p className="bg-vert-blue h-px w-6 mr-2"></p>
                            <Link href="/about" >
                                Read about our team
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 lg:ml-16 w-80 h-56 lg:h-96 lg:w-160 relative mt-8" style={{ minHeight: '230px' }}>
                        <Image
                            alt="team"
                            src={TeamBg}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            className="rounded-3xl"
                        />
                    </div>

                </div>
                <div className="absolute bottom-0 lg:bottom-2 -right-2/5 -z-10  h-1/3 lg:h-9/10 w-full">
                    <Image
                        alt="teamShapeblue"
                        src={'/pattern-shape-bleu.svg'}
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                    />
                </div>
                <div className="absolute bottom-0 lg:-bottom-24 w-160 h-80 lg:w-auto lg:h-auto -right-72 lg:right-0 -z-20 flex justify-end">
                    <Image
                        alt="teamShapebluelight"
                        width={993}
                        height={603}
                        src={'/pattern-ligne-bleu.svg'}
                    />
                </div>
            </div>
            <div className={"flex flex-col lg:flex-row lg:p-20 " + (styles.whyBg)}>
                <div className="m-auto mr-0 max-w-xl px-4 pt-24 pb-4 lg:p-0">
                    <Image
                        alt="map"
                        width={589}
                        height={233}
                        src={'/map2.svg'}
                        className="flex-1"
                    />
                </div>
                <div className="m-auto ml-0 max-w-xl flex-1 pt-12 px-4 pb-24 lg:p-12">
                    <SubHeading text="Global scale" />
                    <Paragraph text="With teams located in Asia, Europe and in the United States, our teams work around your needs and are available at the time that suits you." />
                </div>
            </div>

            <div className="m-auto max-w-7xl flex flex-col lg:flex-row pt-8 lg:py-20 lg:px-20">
                <div className="flex-1 py-12 px-4 lg:p-12">
                    <SubHeading text="Patient-obsessed, <br/> technology neutral" />
                    <Paragraph text="We focus solely on creating the most value for patients and the Health ecosystem. We have no technology preference as long as the technology fits your needs and constraints. <br/><br/> Our experts have already delivered production-level applications with the following Tech Stack components." />
                </div>
                <div className="flex-2 mb-20 lg:mb-0 grid grid-cols-2 lg:grid-cols-4">
                    <div className="mb-10 lg:mb-0 flex justify-center items-center">
                        {/* <Image
                            alt="azure"
                            width={108}
                            height={31}
                            src={'/azure.svg'}
                        /> */}


                        {
                            cloudItems.map((e, i) => <Logo key={i}
                                logo={e}
                                show={showCloud % CLOUD_NUM === i}
                            />)
                        }

                        <div className="h-12 w-px bg-vert-green-light ml-auto justify-self-end"></div>
                    </div>
                    <div className="mb-10 lg:mb-0 flex justify-center items-center">
                        {/* <Image
                            alt="elk-stack"
                            width={109}
                            height={59}
                            src={'/elk-stack.svg'}
                        /> */}

                        {
                            langItems.map((e, i) => <Logo key={i}
                                logo={e}
                                show={showLang % LANG_NUM === i}
                            />)
                        }

                        <div className="h-12 w-px bg-vert-green-light ml-auto justify-self-end"></div>

                    </div>

                    <div className="mb-10 lg:mb-0 flex justify-center items-center">

                        {
                            scmItems.map((e, i) => <Logo key={i}
                                logo={e}
                                show={showSCM % SCM_NUM === i}
                            />)
                        }


                        {/* <Image
                            alt="typescript javascript"
                            width={108}
                            height={55}
                            src={'/tsjs.svg'}
                        /> */}
                        <div className="h-12 w-px bg-vert-green-light ml-auto justify-self-end"></div>

                    </div>
                    <div className="mb-10 lg:mb-0 flex justify-center items-center">
                        {
                            devOpsItems.map((e, i) => <Logo key={i}
                                logo={e}
                                show={showDevOps % DEVOPS_NUM === i}
                            />)
                        }

                        {/* <Image
                            alt="aws"
                            width={108}
                            height={64}
                            src={'/aws.svg'}
                        /> */}
                    </div>
                </div >
            </div >
        </div >
    )
}

function Logo({ show, logo }) {
    const transitions = useTransition(show, null, {
        from: { position: "absolute", opacity: 0, transform: "translateY(100%)" },
        enter: { opacity: 1, transform: "translateY(0%)" },
        leave: { opacity: 0, transform: "translateY(-100%)" }
    });
    return transitions.map(
        ({ item, key, props }) =>
            item && (
                <animated.img
                    width={logo.width}
                    height={logo.height}
                    src={logo.image}
                    alt={logo.alt}
                    key={key}
                    style={props}
                />
            )
    );
}

export default Why
