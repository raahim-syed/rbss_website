import Heading from "../../components/heading/Heading"
import LightCard from "../../components/light-card/LightCard"
import "./services-on-demand.css"
import background from "../../assets/images/contact-section-background.svg"

const ServicesOnDemand = ({extraClasses}) => {
  return (
    <div className={`services-on-demand ${extraClasses ? extraClasses : ""}`}>
        <div style={{textAlign: "center"}}>
            <Heading mode="dark" subHeading="Services on demand" heading="On Demand Stuff" 
                paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, magni." />
                
        </div>
        <div className="grid grid-center container-sm mt-2">
        <LightCard heading="Provision of Guarding and Escorting Services through third party."
         description="Lorem ipsum dolor sit amet, 
         consetetur sadipscing elitr, sed diam 
         nonumy eirmod tempor invidunt ut 
         labore." />

<LightCard heading="Provision of Guarding and Escorting Services through third party."
         description="Lorem ipsum dolor sit amet, 
         consetetur sadipscing elitr, sed diam 
         nonumy eirmod tempor invidunt ut 
         labore." />

<LightCard heading="Provision of Guarding and Escorting Services through third party."
         description="Lorem ipsum dolor sit amet, 
         consetetur sadipscing elitr, sed diam 
         nonumy eirmod tempor invidunt ut 
         labore." />

<LightCard heading="Provision of Guarding and Escorting Services through third party."
         description="Lorem ipsum dolor sit amet, 
         consetetur sadipscing elitr, sed diam 
         nonumy eirmod tempor invidunt ut 
         labore." />

<LightCard heading="Provision of Guarding and Escorting Services through third party."
         description="Lorem ipsum dolor sit amet, 
         consetetur sadipscing elitr, sed diam 
         nonumy eirmod tempor invidunt ut 
         labore." />

<LightCard heading="Provision of Guarding and Escorting Services through third party."
         description="Lorem ipsum dolor sit amet, 
         consetetur sadipscing elitr, sed diam 
         nonumy eirmod tempor invidunt ut 
         labore." />

         
        </div>
    </div>
  )
}

export default ServicesOnDemand
