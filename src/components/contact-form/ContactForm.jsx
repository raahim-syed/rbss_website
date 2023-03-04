import "./contact-form.css"
import {FaPhoneAlt} from  "react-icons/fa"
import {FiMail} from "react-icons/fi"
import Heading from '../heading/Heading'
import FormControl from './form-control/FormControl'
import ButtonPrimary from "../buttons/ButtonPrimary"

const ContactForm = () => {
  return (
    <div className="flex flex-center mt-4">
        <div className='contact-form-holder'>
            <Heading mode="dark" subHeading="Contact Us" heading="You know what to do" paragraph="Waiting for you to click the button" />
            <section className="contact-details mt-2 flex flex-space-between">
                <span className="left flex flex-center">
                    <FaPhoneAlt />
                    <span>03111-725848</span>
                </span>
                <span className="right flex flex-center">
                    <FiMail />
                    <span>some@some.com</span>
                </span>
            </section>

            <form action="">
                <FormControl type="email" name="email" id="contact-id" placeholder="Enter Your Email" />
                <FormControl type="name" name="subject" id="subject-id" placeholder="Enter Subject" />
                <FormControl type="textarea" name="body" id="body-id" placeholder="Write..." rows="10" />

                <ButtonPrimary type="dark" href="nowhere" text="Submit" />
            </form>
        </div>       
    </div>

  )
}

export default ContactForm
