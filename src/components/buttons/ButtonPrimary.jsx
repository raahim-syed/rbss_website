import "./button-primary.css"

const ButtonPrimary = ({type, href, text, extraClasses, ...props}) => {
  return (
    <a href={href} className={`btn-primary ${type === "dark"? "btn-dark":"btn-primary"} ${extraClasses}`} >
      {text}
    </a>
  )
}

export default ButtonPrimary
