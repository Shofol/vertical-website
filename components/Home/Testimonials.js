import Testimonial from './Testimonial'

const Testimonials = ({ home }) => {
    const jamie = home.find(x => x.fields.title === 'Jamie Legg')
    const sid = home.find(x => x.fields.title === 'Sid Viswanathan')
    return (
        <div className="flex flex-col lg:flex-row mx-4 lg:mx-56 -mt-96 lg:-mt-24 items-center lg:items-stretch lg:justify-center">
            {/* -bottom-6 lg:-bottom-36 */}
            <div className="max-w-xl lg:mr-8 order-2 lg:order-1">
                <Testimonial
                    text="Scaling up health tech can be a challenge, from logistics and compliance to different architecture norms. With Vertrical’s expertise in software development, staffing, and compliance, we’re able to reach our milestones on deadline and at cost, ultimately providing our customers the seamless healthcare experiences they deserve."
                    employeeName="Sid Viswanathan"
                    post="Co-Founder & President"
                    companyName="Truepill"
                    companyLink="/"
                    index={1}
                    picture={sid.fields.picture1.fields.file.url}
                />
            </div>
            <div className="max-w-xl mb-8 lg:mb-0 lg:ml-8 order-1 lg:order-2">
                <Testimonial
                    text="Vertrical’s engineers, managers and business analysts interfaced quickly and seamlessly with ours. It felt like doubling the size of our team overnight without the need to recruit, onboard and train. We were really impressed with the technical skill and the compliance expertise of the Vertrical team."
                    employeeName="Jamie Legg"
                    post="Chief Information Security Officer"
                    companyName="Volta Technology"
                    companyLink="/"
                    index={2}
                    picture={jamie.fields.picture1.fields.file.url}
                />
            </div>
        </div>
    )
}

export default Testimonials
