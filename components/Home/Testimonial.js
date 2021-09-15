import useCoverBg from '../../hooks/useCoverBg'

const Testimonial = ({ text, employeeName, companyName, companyLink, post, index, picture }) => {

    const user1Bg = useCoverBg(picture)

    return (
        <div className="bg-white rounded-xl relative p-8">
            <p className="text-vert-green text-xl font-bold">{`"${text}"`}</p>
            <div className="flex mt-6 items-center">
                <div className={"w-16 h-16 relative " + (index === 1 ? 'rounded-2xl' : 'userImgPolygon')} style={user1Bg}>
                    <div className={index === 1 ? 'rect-border' : 'userImgPolygonOutline'}></div>
                </div>
                <div className="text-vert-green text-sm ml-3">
                    <p>{employeeName}</p>
                    <p className="text-vert-green-light">{post} at <span className="text-vert-blue font-bold">{companyName}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
