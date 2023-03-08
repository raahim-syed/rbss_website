import { useState } from "react";
import "./light-card.css"

const LightCard = ({heading, description, extraClasses}) => {
  const [poppedUp, setPoppedUp] = useState({up: false})

  console.log(poppedUp)

  const moveRedBg = (e) => {
    if(poppedUp.up == false) {
      
      e.target.firstChild.animate({
        transform: "translate(-50%,-54%)",
      }, 500)

      setPoppedUp({...poppedUp, up: true})
    }
  }

  const resetRedBg = (e) => {
    if(poppedUp.up){
      console.log(e.target.firstChild)
      
      e.target.firstChild.animate({
        transform: "translate(-50%,-50%)",
      }, 500)

      setPoppedUp({...poppedUp, up: false})
    }
  }

  return (
    <div className={`card-light ${extraClasses ? extraClasses : ""}`} onMouseEnter={moveRedBg} onMouseLeave={resetRedBg} >
      <div className="card-content-holder">
        <div className="card-red-bg"></div>
        <h3>{heading}</h3>
        <p className="mt-1">
            {description}
        </p>
      </div>
    </div>  
  )
}

export default LightCard
