import Heading from "../../components/heading/Heading"
import LightCard from "../../components/light-card/LightCard"
import "./services-on-demand.css"
import background from "../../assets/images/contact-section-background.svg"
import servicesOnDemand from "../../assets/data/services-on-demand.json"

const ServicesOnDemand = ({extraClasses}) => {
  return (
    <div className={`services-on-demand ${extraClasses ? extraClasses : ""}`}>
        <div style={{textAlign: "center"}}>
            <Heading mode="dark" subHeading="Services on demand" heading="On Your Demands" 
                paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, magni." />
                
        </div>
        <div className="grid container-sm mt-2" style={{justifyContent:"center", alignItems:"top"}}>
                {servicesOnDemand.map((data, index) => <LightCard heading={data.heading} description={data.data} />)}
                

        </div>
    </div>
  )
}

export default ServicesOnDemand
