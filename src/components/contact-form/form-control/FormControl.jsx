import "./form-control.css"

const FormControl = ({type, name, id, placeholder , extraClasses, ...props}) => {
  return (
    <div className={`form-control ${extraClasses}`}>
        <input type={type} name={name} id={id} placeholder={placeholder} props  />
    </div>  
  )
}

export default FormControl
