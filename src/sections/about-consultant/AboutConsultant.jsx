import "./about-consultant.css"
import consultantImage from  "../../assets/images/consultant-image.jpg"
import Heading from '../../components/heading/Heading'
import ButtonPrimary from "../../components/buttons/ButtonPrimary"
import ButtonSecondary from "../../components/buttons/ButtonSecondary"

const AboutConsultant = ({extraClasses, ...props}) => {
  return (
    <section className={`about-consultant ${extraClasses}`}>
      <div className="container grid grid-center">
        <section className="left">
          <Heading mode="dark" subHeading="About Consultant" 
            heading="The Brains of the operation" 
            paragraph="20 Years of Experience at your...." />

            <h3 className="underlined mt-1">
              A Glimpse Of His Expertise:
            </h3>

            <ul id="list mt-1">
              <li className="mt-1">Reopening Baluchistan for Oil & Gas exploration in 2008 after force majeure 
                  post assassinations of Chinese nationals in 2005.
              </li>
              <li className="mt-1">Reopening Baluchistan for Oil & Gas exploration in 2008 after force majeure 
                  post assassinations of Chinese nationals in 2005.
              </li>
              <li className="mt-1">Reopening Baluchistan for Oil & Gas exploration in 2008 after force majeure 
                  post assassinations of Chinese nationals in 2005.
              </li>
            </ul>

            <br />
            <br />

            <ButtonPrimary type="dark" text="Contact Us" href="#contact" />
            <ButtonSecondary text="Learn More" href="/about-consultant" />
        </section>

        <section className="right">
          <div className="consultant-image-holder">
            <img src={consultantImage} alt="mateen-khan" />
          </div>
        </section>
      </div>
    </section>
  )
}

export default AboutConsultant
