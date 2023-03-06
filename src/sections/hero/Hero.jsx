import "./hero.css"
import ButtonPrimary from "../../components/buttons/ButtonSecondary"
import ButtonSecondary from "../../components/buttons/ButtonSecondary"
import Heading from "../../components/heading/Heading"


const Hero = ({extraClasses, ...props}) => {
  return (
    <div className={`grid hero-section ${extraClasses}`} props>
      
      <section className="left">
        <Heading subHeading="Welcome" 
            heading="20+ Years Of Experience At Your Service"
            paragraph="Some random paragrapgh" />

            <ButtonPrimary text="Contact Us" href="#contact" />
            <ButtonSecondary type="light" text="Learn More" href="/about-consultant" />
      </section>

      <section className="right">
        Right
      </section>
    </div>
  )
}

export default Hero
