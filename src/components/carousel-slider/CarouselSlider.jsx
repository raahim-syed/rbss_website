import "./carousel-slider.css"

import {FaChevronRight, FaChevronLeft} from "react-icons/fa"

import Card from "../card/Card"


const iconStyle = {
    color: "var(--secondary-color)",
    fontSize: "2rem",
}

const CarouselSlider = () => {
  return (
    <section className="grid carousel-slider">

        <div className="left-control flex flex-center">
            <FaChevronLeft style={iconStyle} />
        </div>

        <div className="carousel-content">
            <div className="carousel-slide grid">
                <Card heading="Geopolitical and security
                    intelligence Advisory 
                    Services" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat!" />

                <Card heading="Geopolitical Security Management" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat!" />

                <Card heading="Geopolitical Security Management" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat!" />

            <Card heading="Geopolitical Security Management" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat!" />

                <Card heading="Geopolitical Security Management" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat!" />

                <Card heading="Geopolitical Security Management" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat!" />
            </div>

            <div className="carousel-slide">
                <Card heading="Geopolitical Security Management" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat!" />

                <Card heading="Geopolitical Security Management" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat!" />

                <Card heading="Geopolitical Security Management" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat!" />
            </div>
        </div>

        <div className="right-control flex flex-center">
            <FaChevronRight style={iconStyle} />
        </div>
    </section>
  )
}

export default CarouselSlider
