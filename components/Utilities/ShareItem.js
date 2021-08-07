import Link from 'next/link'
import Image from 'next/image'

const ShareItem = ({ link, image, background }) => {
    return (
        <Link href={link}>
            <a passHref target="_blank" rel="noreferrer">
                <div className="w-14 h-14 lg:w-10 lg:h-10 flex items-center justify-center cursor-pointer" style={{ background: `${background}`, borderRadius: '15px' }}>
                    <Image src={image} width={20} height={20} alt="facebook share"></Image>
                </div>
            </a>
        </Link>
    )
}

export default ShareItem
