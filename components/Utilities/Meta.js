import React from 'react'
import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="language" content="en" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />

                {/* social */}
                {/* fb */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://vertrical.com/" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content="/social.png" />
                <meta property="og:site_name" content={title} />

                {/* twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://vertrical.com/" />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content="/social.png" />
                <meta name="twitter:image:alt" content="Website image" />

                {/* Favicons */}
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
                <link rel="manifest" href="/favicons/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />

                {/* Import CSS for nprogress */}
                <link rel="stylesheet" type="text/css" href="/nprogress.css" />
            </Head>
        </div>
    )
}

Meta.defaultProps = {
    title: 'Vertrical',
    keywords: "Health, Tech, microservice, sensitive, software, security",
    description: "We help you deploy scalable & compliant Digital Health. Digital Health product and IT teams rely on Vertrical to deploy tailored microservices and apps that handle sensitive health data."
}


export default Meta
