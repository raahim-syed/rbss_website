import "./contact-form.css"
import {phoneNumber} from "../../assets/data/basic-info.json";
import {FaPhoneAlt} from  "react-icons/fa"
import {FiMail} from "react-icons/fi"
import Heading from '../heading/Heading'
import FormControl from './form-control/FormControl'
import ButtonPrimary from "../buttons/ButtonPrimary"
import emailjs from '@emailjs/browser';
import {useRef} from "react";


const ContactForm = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        
        try{
            const email = await emailjs.sendForm('service_lydidyo', 'template_5vmsa7j', form.current, 'd3pQmMd6quZzGZGs4');

            console.log(email)
        }catch(error){
            console.log(error)
        }  
    };


  return (
    <div className="flex flex-center mt-4">
        <div className='contact-form-holder'>
            <Heading mode="dark" subHeading="Contact Us" heading="You know what to do" paragraph="Waiting for you to click the button" />
            <section className="contact-details mt-2 flex flex-space-between">
                <span className="left flex flex-center">
                    <FaPhoneAlt />
                    <span>0311-725848</span>
                </span>
                <span className="right flex flex-center">
                    <FiMail />
                    <span>some@some.com</span>
                </span>
            </section>

            <form ref={form} onSubmit={sendEmail} action="/">
                <FormControl type="text" name="from_name" id="contact-name" placeholder="Enter Your Name" />
                <FormControl type="email" name="from_email" id="contact-id" placeholder="Enter Your Email" />
                <FormControl type="text" name="subject" id="subject-id" placeholder="Enter Subject" />
                <FormControl type="textarea" name="message" id="body-id" placeholder="Write..." rows="10" />

                <ButtonPrimary type="dark" text="Submit" />
                {/* <button type="submit">Submit</button> */}
            </form>
        </div>       
    </div>

  )
}

export default ContactForm
