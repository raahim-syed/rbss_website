import CarouselSlider from '../../components/carousel-slider/CarouselSlider'
import Heading from '../../components/heading/Heading'

import Card from '../../components/card/Card';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


const CompanyServices = () => {
  // swiper element
  const swiperEl = document.querySelector('swiper-container');

  // swiper parameters
  const swiperParams = {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  // now we need to assign all parameters to Swiper element
  Object.assign(swiperEl, swiperParams);

  // and now initialize it
  swiperEl.initialize();

  return (
    <section className='services bg-dark mt-2 ptb-2 bottoms-rounded'>
        <div className="container">
            <Heading subHeading="Services" heading="Masters Of Multiple Domains"
            paragraph="A list of the plethora of services we offer" />

            {/* <CarouselSlider /> */}
            <swiper-container>
              <swiper-button-prev />

              <swiper-slide>
                <div className="grid grid-center" style={{gridTemplateColumns: "repeat(3, 1fr)"}}>
                  <Card heading="Geopolitical Security Management" 
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat!" />

                  <Card heading="Geopolitical Security Management" 
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat!" />

                  <Card heading="Geopolitical Security Management" 
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat!" />
                </div>
              </swiper-slide>

              <swiper-slide>
                <div className="grid grid-center" style={{gridTemplateColumns: "repeat(3, 1fr)"}}>
                    <Card heading="Geopolitical Security Management" 
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat!" />

                    <Card heading="Geopolitical Security Management" 
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat!" />

                    <Card heading="Geopolitical Security Management" 
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat!" />
                </div>
              </swiper-slide>
              
              <swiper-button-next />
            </swiper-container>
        </div>
    </section>
  )
}

export default CompanyServices
