import "./contact.css"
import ContactForm from "../../components/contact-form/ContactForm"


const Contact = ({extraClasses, ...props}) => {
  return (
    <div className={`contact-section ${extraClasses}`} props>
      <ContactForm />
    </div>
  )
}

export default Contact
