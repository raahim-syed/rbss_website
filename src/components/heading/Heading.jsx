import "./heading.css"
const Heading = ({subHeading, heading, paragraph, mode, extraClasses, ...props}) => {
  return (
    <div className={`${extraClasses ? extraClasses : ""}`}>
      <span className='top-heading'>{subHeading}</span>
      <h1 className='main-heading'
        style={mode === "dark" ? {color: "var(--primary-color)"} : {color: "#fff"}}
      >
        {heading}
      </h1>

      <p className='heading-paragraph' 
        style={mode === "dark" ? {color: "var(--primary-color)"} : {color: "#fff"}}>
          {paragraph}
      </p>
    </div>
  )
}

export default Heading
