import Testimonial from './Testimonial'

const Testimonials = ({ home }) => {
    return (
        <div className="flex flex-col lg:flex-row mx-4 lg:mx-56 -mt-96 lg:-mt-24">
            {/* -bottom-6 lg:-bottom-36 */}
            <div className="m-auto max-w-xl lg:mr-8 order-2 lg:order-1">
                <Testimonial
                    text="Working with Vertrical means working with teams of experts who deliver scalable and secure microservices on time and at cost"
                    employeeName="Scott Arden-Jones"
                    post="Head of UK Engineering"
                    companyName="Truepill"
                    companyLink="/"
                    index={1}
                    picture={home[3].fields.picture1.fields.file.url}
                />
            </div>
            <div className="m-auto max-w-xl mb-8 lg:mb-0 lg:ml-8 order-1 lg:order-2">
                <Testimonial
                    text="Working with Vertrical means working with teams of experts who deliver scalable and secure microservices on time and at cost"
                    employeeName="Scott Arden-Jones"
                    post="Head of UK Engineering"
                    companyName="Truepill"
                    companyLink="/"
                    index={2}
                    home={home[4].fields.picture1.fields.file.url}
                />
            </div>
        </div>
    )
}

export default Testimonials
