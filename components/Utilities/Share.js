import ShareItem from './ShareItem'
import { useEffect, useState } from 'react'

const Share = ({ links }) => {

    const [socialLinks, setSocialLinks] = useState(links);

    useEffect(() => {
        const tempLinks = { ...links };
        tempLinks.facebook = tempLinks.facebook.replace("https://vertrical.com", window.location.href);
        tempLinks.twitter = tempLinks.twitter.replace("https://vertrical.com", window.location.href);
        tempLinks.linkedIn = tempLinks.linkedIn.replace("https://vertrical.com", window.location.href);
        tempLinks.whatsapp = tempLinks.whatsapp.replace("https://vertrical.com", window.location.href);
        tempLinks.mail = tempLinks.mail.replace("https://vertrical.com", window.location.href);
        setSocialLinks(tempLinks);
    }, [links])

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center mb-12">
            <p className="text-vert-green mb-4 lg:mb-0 lg:mr-2">Share</p>
            <div className="flex space-x-2">
                {socialLinks.facebook && socialLinks.facebook !== '' && <ShareItem link={socialLinks.facebook} image={'/facebook.svg'} background={'#3B5998'} />}
                {socialLinks.twitter && socialLinks.twitter !== '' && <ShareItem link={socialLinks.twitter} image={'/twitter.svg'} background={'#00ACEE'} />}
                {socialLinks.linkedIn && socialLinks.linkedIn !== '' && <ShareItem link={socialLinks.linkedIn} image={'/linkedin.svg'} background={'#0072B1'} />}
                {socialLinks.whatsapp && socialLinks.whatsapp !== '' && <ShareItem link={socialLinks.whatsapp} image={'/whatsapp.svg'} background={'#4AC959'} />}
                {socialLinks.mail && socialLinks.mail !== '' && <ShareItem link={socialLinks.mail} image={'/email.svg'} background={'#FF8A47'} />}
            </div>
        </div>
    )
}

export default Share