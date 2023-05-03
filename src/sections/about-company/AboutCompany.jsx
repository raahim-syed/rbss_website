import "./about-company.css"
import Heading from "../../components/heading/Heading" 
import ButtonPrimary from "../../components/buttons/ButtonPrimary"

const AboutCompany = ({extraClasses}) => {
  return (
    <div className={`about-company ${extraClasses}`}>
        <section className="container grid grid-space-between">

            <section className="left">
                <Heading subHeading="About Us" heading="About The Company" 
                    paragraph="A little about the great things we do to ensure your safety" 
                    mode="dark"
                    />
                <ButtonPrimary type="dark" text="Contact Us" />
            </section>

            <section className="right">
                <p>
                We are a private, world-class security consultancy agency equiped with a highly experienced (45+ years) security professional, providing Security Consulting Services to ensure businesses secure mission-critical systems. 
                </p>
                <br />
                <p>
                Our Speciality is protection and defence of company assets and critical infrastructure.
                </p>
                <br />
                <p> 
                We understand the needs of small and medium businesses and we craft a tailor-fitted solution to each unique environment / challenges by giving advise and delivering solutions / services which protect company assets, businesses and operations specially in high risk areas.
                </p>
            </section>
            
        </section>
    </div>
  )
}

export default AboutCompany
