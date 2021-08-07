import ShareItem from './ShareItem'

const Share = ({ links }) => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center mb-12">
            <p className="text-vert-green mb-4 lg:mb-0 lg:mr-2">Share</p>
            <div className="flex space-x-2">
                {links.facebook && links.facebook !== '' && <ShareItem link={links.facebook} image={'/facebook.svg'} background={'#3B5998'} />}
                {links.twitter && links.twitter !== '' && <ShareItem link={links.twitter} image={'/twitter.svg'} background={'#00ACEE'} />}
                {links.linkedIn && links.linkedIn !== '' && <ShareItem link={links.linkedIn} image={'/linkedin.svg'} background={'#0072B1'} />}
                {links.whatsapp && links.whatsapp !== '' && <ShareItem link={links.whatsapp} image={'/whatsapp.svg'} background={'#4AC959'} />}
                {links.mail && links.mail !== '' && <ShareItem link={links.mail} image={'/email.svg'} background={'#FF8A47'} />}
            </div>
        </div>
    )
}

export default Share