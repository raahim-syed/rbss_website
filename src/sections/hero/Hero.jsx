import "./hero.css"
import Heading from "../../components/heading/Heading"
import ButtonPrimary from "../../components/buttons/ButtonPrimary"
import ButtonSecondary from "../../components/buttons/ButtonSecondary"

const Hero = ({extraClasses, ...props}) => {
const data = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
              diam nonumy eirmod tempor invidunt ut labore et dolore 
              magna aliquyam erat, sed diam voluptua. At vero eos et 
              accusam et justo duo dolores et ea rebum. `

  return (
    <div className={`grid hero-section ${extraClasses ? extraClasses : ""}`} props>
      
      <section className="left">
        <Heading subHeading="Welcome" 
            heading="20+ Years Of Experience At Your Service"
            paragraph={data} />
            
          <div className="hero-buttons">
            <ButtonPrimary text="Contact Us" href="#contact" />
            <ButtonSecondary type="light" text="Learn More" href="/about-consultant" />
          </div>
      </section>

      <section className="right">
      </section>
    </div>
  )
}

export default Hero
