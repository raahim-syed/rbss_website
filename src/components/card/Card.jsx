import "./card.css"
import stroke from "../../assets/images/red-stroke.svg"

const Card = ({heading, description, ...props}) => {
  return (
    <div className='card bg-dark'>
        <div className="card-header flex">
            <img src={stroke} alt="heading-left-border" className="heading-line" />
            <h3 className="light card-heading">{heading}</h3>
        </div>
        <div className="card-content">
            <p className="light">{description}</p>
        </div>
    </div>
  )
}

export default Card
