import {useState, useEffect} from "react"

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css/bundle"

//Components
import CarouselSlider from '../../components/carousel-slider/CarouselSlider'
import Heading from '../../components/heading/Heading'
import Card from '../../components/card/Card';

//CSS
import "./company-services.css"

//Data
import services from "../../assets/data/company-services.json"


const CompanyServices = ({extraClasses, ...props}) => {
  const [companyServices, setCompanyServices] = useState({});

  useEffect(() => {
    setCompanyServices(services);
  }, [])

  console.log(companyServices)

  // useEffect(() => {
  //   // swiper element
  //   const swiperEl = document.querySelector('swiper-container');

  //   // swiper parameters
  //   const swiperParams = {
  //     slidesPerView: 1,
  //     grabCursor: true,
  //     loop: true,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //   };

  //   // now we need to assign all parameters to Swiper element
  //   Object.assign(swiperEl, swiperParams);

  //   // and now initialize it
  //   swiperEl.initialize();
  // }, [])


  return (
    <section className={`services bg-dark ${extraClasses ? extraClasses : ""}`} props>
        <div className="container">
            <Heading subHeading="Services" heading="Masters Of Multiple Domains"
            paragraph="A list of the plethora of services we offer" />

            <br />
            <br />

            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            > 
                <SwiperSlide>
                  {services.map((service, index) => (
                      index <= 5 ?<Card key={index} heading={service.heading} description={service.data} />  : ""
                  ))}
                </SwiperSlide>

                <SwiperSlide>
                  {services.map((service, index) => (
                      index > 5 ?<Card key={index} heading={service.heading} description={service.data} />  : ""
                  ))}
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default CompanyServices
