import React from 'react'
import styles from './Utilities.module.css'
import Contact from './Contact'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={"px-8 lg:px-16 " + styles.footer}>
            <h2 className="text-4xl font-bold text-white text-center mt-28">Audit your Health Tech software <br className="hidden lg:block" />for security and compliance</h2>
            <div className="flex w-full justify-center items-center mt-8">
                <Contact classes="bg-white text-vert-blue mx-auto px-12 py-4" />
            </div>
            <div className="flex flex-col lg:flex-row mt-24 mb-12">
                <div className="flex-1 lg:ml-24">
                    <Image src="/logo.svg" width="158px" height="30px" alt="vertical logo" />
                </div>
                <div className="flex-2 flex flex-col lg:flex-row justify-between text-white">
                    <div className="flex flex-col">
                        <div className="mt-8 lg:mt-0 flex items-center">
                            <span className="w-5 h-px bg-white mr-2"></span>
                            <Link href="/">GDPR for US Health Tech</Link>
                        </div>
                        <div className="mt-8 lg:mt-10 flex items-center">
                            <span className="w-5 h-px bg-white mr-2"></span>
                            <Link href="/">Privacy Policy</Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mt-8 lg:mt-0 flex items-center">
                            <span className="w-5 h-px bg-white mr-2"></span>
                            <Link href="/">What is DiGa?</Link>
                        </div>
                        <div className="mt-8 lg:mt-10 flex items-center">
                            <span className="w-5 h-px bg-white mr-2"></span>
                            <Link href="/">Legal Disclosure</Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mt-8 lg:mt-0 flex items-center">
                            <span className="w-5 h-px bg-white mr-2"></span>
                            <Link href="/">Complaint Health Tech Development</Link>
                        </div>

                        <div className="flex items-center mt-8 lg:mt-10">
                            <span >{new Date().getFullYear()} © Vertrical</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
