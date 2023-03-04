import "./about-consultant.css"
import Heading from '../../components/heading/Heading'
import ButtonPrimary from "../../components/buttons/ButtonPrimary"
import BorderedImage from "./BorderedImage"

const AboutConsultant = ({image, ...props}) => {
  return (
    <section className="about-consultant mt-4">
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

            <ButtonPrimary type="dark" text="Contact Us" href="#contact" />
        </section>

        <section className="right">
          <div className="consultant-image-holder">
            <BorderedImage />
          </div>
        </section>
      </div>
    </section>
  )
}

export default AboutConsultant
