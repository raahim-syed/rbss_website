import "./button.css"
import {FaChevronRight} from "react-icons/fa"
import { Link } from "react-router-dom"

const ButtonSecondary = ({type, href, text, extraClasses, ...props}) => {
  return (
    <>
        <Link to={href} className={`btn btn-secondary ${type === "light" ? "btn-secondary-light" : ""} ${extraClasses}`} props >
            {text}
            <FaChevronRight />
        </Link>
    </>
  )
}

export default ButtonSecondary
