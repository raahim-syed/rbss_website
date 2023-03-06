import "./button.css"
import { Link } from "react-router-dom"

const ButtonPrimary = ({type, href, text, extraClasses, submit, ...props}) => {
  return (
    <>
      { !submit ? 
          <Link to={href} className={`btn btn-primary ${type === "dark"? "btn-dark":"btn-light"} ${extraClasses}`} props >
            {text}
          </Link>
      :
        <button type="submit" className={`btn btn-primary ${type === "dark"? "btn-dark":"btn-light"} ${extraClasses}`} props>
          {text}
        </button>

        }    
    </>

  )
}

export default ButtonPrimary
