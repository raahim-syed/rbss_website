import "./card.css"

const Card = ({heading, description, ...props}) => {
  return (
    <div className='card bg-dark'>
        <div className="card-header flex flex-center">
            <div className="heading-line"></div>
            <h3 className="light card-heading">{heading}</h3>
        </div>
        <div className="card-content">
            <p className="light">{description}</p>
        </div>
    </div>
  )
}

export default Card
