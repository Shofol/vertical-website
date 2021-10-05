import React from 'react'
import styles from './About.module.css';

const Hero = () => {
    return (
        <div>
            <div className={styles.hero}>
                <h1 className="font-bold text-vert-green max-w-xl text-4xl leading-tight lg:leading-snug lg:text-5xl">Our Mission is to help Patient-Centric Digital Health Go Global</h1>
            </div>
            <div className="bg-vert-green-medium max-w-2xl p-8 rounded-2xl mx-5 lg:mr-0 lg:ml-20 -mt-20 lg:-mt-8 lg:mb-32">
                <p className="text-xl text-vert-green font-bold">
                    We believe that digital health technology has the biggest potential positive impact on how we live our lives across
                    the globe. These new innovative technologies have the capacity to help us live longer, happier and fuller lives.
                    Our mission is to help make these technologies available to more people.
                </p>
            </div>
        </div>
    )
}



export default Hero
