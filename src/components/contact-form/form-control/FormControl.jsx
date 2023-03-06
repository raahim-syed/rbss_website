import "./form-control.css"

const FormControl = ({type, name, id, placeholder , extraClasses, ...props}) => {
  return (
    <div className={`form-control ${extraClasses}`}>
      {type === "textarea" ?
      <textarea type={type} name={name} id={id} placeholder={placeholder} props rows="10"   />
      :
      <input type={type} name={name} id={id} placeholder={placeholder} props  />
      }
    </div>  
  )
}

export default FormControl
