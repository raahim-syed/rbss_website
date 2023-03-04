import Heading from "../../components/heading/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <div className='grid hero-section'>
      
      <section className="left">
        <Heading subHeading="Welcome" 
            heading="20+ Years Of Experience At Your Service"
            paragraph="Some random paragrapgh" />
        <a href="#list" className="btn-primary-light">Contact Us</a>
      </section>

      <section className="right">
        Right
      </section>
    </div>
  )
}

export default Hero
