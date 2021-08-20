import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Team = ({ members }) => {
    const [selectedMember, setSelectedMember] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const [splittedArray, setSplittedArray] = useState([]);
    const [showShortDescription, setShowShortDescription] = useState(true);
    const [screenSize, setScreenSize] = useState(0);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenSize(window.innerWidth);
        });
        let tempMemebers = [];
        let splitCount = 1;
        if (window.innerWidth > 768 && window.innerWidth <= 1280) {
            splitCount = 2;
        }
        else if (window.innerWidth > 1280) {
            splitCount = 3;
        }

        for (let i = 0; i < members.length; i += splitCount) {
            tempMemebers = [...tempMemebers, members.slice(i, i + splitCount)];
        }
        setSplittedArray(tempMemebers);
    }, [members, screenSize]);

    const checkActive = (member) => {
        if (selectedMember === null) {
            return 'opacity-1';
        }
        return ((selectedMember !== null) && (selectedMember.fields.name === member.fields.name)) === true ? 'hidden md:block md:opacity-100' : 'opacity-40';
    }

    const returnSrc = (member) => {
        const index = members.findIndex(memberItem => memberItem.fields.name === member.fields.name);
        let src = '';
        switch ((index + 1) % 6) {
            case 1:
                src = '/team-1.svg'
                break;
            case 2:
                src = '/team-2.svg'
                break;
            case 3:
                src = '/team-3.svg'
                break;
            case 4:
                src = '/team-4.svg'
                break;
            case 5:
                src = '/team-1.svg'
                break;
            case 0:
                src = '/team-1.svg'
                break;
            default:
                break;
        }
        return src;
    }

    const returnShape = (member) => {
        if (!member) {
            return;
        }
        const index = members.findIndex(memberItem => memberItem.fields.name === member.fields.name);
        let shape = '';
        switch ((index + 1) % 6) {
            case 1:
                shape = 'rounded-3xl'
                break;
            case 2:
                shape = 'userImgPolygon w-60 h-60'
                break;

            case 3:
                shape = 'rounded-full icon-circle'
                break;

            case 4:
                shape = 'rounded-full icon-circle'
                break;

            case 5:
                shape = 'rounded-3xl'
                break;

            case 0:
                shape = 'userImgPolygon w-60 h-60'
                break;

            default:
                break;
        }
        return shape;
    }

    const returnBorder = (member) => {
        if (!member) {
            return;
        }
        const index = members.findIndex(memberItem => memberItem.fields.name === member.fields.name);
        let shape = '';
        switch ((index + 1) % 6) {
            case 1:
                shape = 'rect-border'
                break;
            case 2:
                shape = 'userImgPolygonOutline'
                break;

            case 5:
                shape = 'rect-border'
                break;

            case 0:
                shape = 'userImgPolygonOutline'
                break;

            default:
                break;
        }
        return shape;
    }

    const handleDescription = (member, index) => {
        setSelectedMember(member);
        setSelectedRow(index);
        setShowShortDescription(true);
        const descElement = document.getElementById('desc');
        descElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return (
        <div className="bg-vert-green-lighter py-12 lg:py-32 px-5 lg:px-20">
            <h1 className="p-10 text-4xl text-vert-green font-bold text-center mb-8">Our Team</h1>
            {
                splittedArray.map(
                    (memberArray, index) => {
                        return <div className="flex flex-col items-center" key={index}>
                            <div className="flex flex-col md:flex-row justify-center md:space-x-5">
                                {
                                    memberArray.map(
                                        (member, memIndex) => {
                                            return <div key={memIndex} style={{ background: `top / cover url(${returnSrc(member)}), #fff` }}
                                                className={"relative rounded-3xl bg-white py-10 px-20 max-w-sm max-h-sm col-span-1 mb-5 transition-opacity duration-400 " + (checkActive(member))}>
                                                <div className={"w-56 h-56 z-20 relative " + (returnShape(member))}
                                                    style={{ background: `center / cover no-repeat url(${member.fields.image.fields.file.url})` }}>
                                                    <div className={returnBorder(member)}></div>
                                                </div>
                                                <div className="z-20 relative">
                                                    <p className="text-center text-vert-blue text-xl font-bold mt-5">{member.fields.name}</p>
                                                    <p className="text-center text-vert-green-light mt-2">{member.fields.title}</p>
                                                </div>
                                                <button disabled={(selectedMember !== null) && (selectedMember.fields.name === member.fields.name)} className="z-20 bg-vert-blue p-3 rounded-md flex items-center mr-2 absolute right-3 bottom-5"
                                                    onClick={() => { handleDescription(member, index) }}>
                                                    <Image src="/plus.svg" width={14} height={14} alt="see member detail" />
                                                </button>
                                            </div>
                                        }
                                    )
                                }
                            </div>
                            <div id="desc" className={'transition-opacity duration-400 ' + (selectedRow === index ? 'opacity-1 my-8' : 'opacity-0 h-0')}>
                                <div className="m-auto max-w-screen-xl flex flex-col md:flex-row items-start">
                                    <div className="md:pr-12 order-2 md:order-1">
                                        <div className="w-full h-px bg-vert-green-lightest"></div>
                                        <div className="my-8 md:my-20">
                                            <p className="text-vert-blue text-4xl font-bold mt-5">{selectedMember?.fields?.name}</p>
                                            <p className="text-vert-green-light text-xl mt-2">{selectedMember?.fields?.title}</p>
                                            {showShortDescription && <p className="text-vert-green mt-8">{selectedMember?.fields?.shortDescription}</p>}
                                            {showShortDescription && <button onClick={() => { setShowShortDescription(false) }} className="text-vert-blue font-bold flex items-center my-6"><div className="w-3 h-px bg-vert-blue mr-2"></div>Read more</button>}
                                            {!showShortDescription && <p className="text-vert-green mt-8">{selectedMember?.fields?.description}</p>}
                                        </div>
                                        <div className="w-full h-px bg-vert-green-lightest"></div>

                                    </div>
                                    <div className="rounded-3xl bg-white p-10 max-w-sm max-h-sm col-span-1 relative mb-8 md:mb-0 order-1 md:order-2">
                                        <div className={"rounded-xl w-56 h-56 relative " + (returnShape(selectedMember))}
                                            style={{ background: selectedMember ? `center / cover no-repeat url(${selectedMember?.fields?.image?.fields?.file?.url})` : '' }}>
                                            <div className={returnBorder(selectedMember)}></div>
                                        </div>
                                        <button className="bg-vert-blue p-3 rounded-md flex items-center mr-2 absolute top-4 right-4"
                                            onClick={() => { setSelectedMember(null); setSelectedRow(null); setShowShortDescription(true) }}>
                                            <Image src="/whiteClose.svg" width={14} height={14} alt="close member detail" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                )
            }

        </div>
    )
}

export default Team
