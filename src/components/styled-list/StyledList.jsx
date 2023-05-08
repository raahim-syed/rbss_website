import "./styled-list.css"

import stroke from "../../assets/images/red-stroke.svg"

const StyledList = ({description, ...props}) => {
  return (
    <div className='styled-list'>
        <article className="description">
            {description}
        </article>
    </div>
  )
}

export default StyledList
