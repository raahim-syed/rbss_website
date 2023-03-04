
import CarouselSlider from '../carousel-slider/CarouselSlider'
import Heading from '../heading/Heading'

const CompanyServices = () => {
  return (
    <section className='services bg-dark mt-2 ptb-2 bottoms-rounded'>
        <div className="container">
            <Heading subHeading="Services" heading="Masters Of Multiple Domains"
            paragraph="A list of the plethora of services we offer" />

            <CarouselSlider />
        </div>
    </section>
  )
}

export default CompanyServices
