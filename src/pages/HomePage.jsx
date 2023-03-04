import React from 'react'


import AboutCompany from '../sections/about-company/AboutCompany'
import Card from '../components/card/Card'
import CompanyServices from '../sections/company-services/CompanyServices'
// import AboutConsultant from '../sections/about-consultant/AboutConsultan
import AboutConsultant from "../sections/about-consultant/AboutConsultant"
import Hero from "../sections/hero/Hero"
import ContactForm from '../sections/contact-form/ContactForm'

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutCompany />
      <CompanyServices />
      <AboutConsultant />
      <ContactForm />
    </>
  )
}

export default HomePage
