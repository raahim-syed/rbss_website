import React from 'react'


import AboutCompany from '../components/about-company/AboutCompany'
import Card from '../components/card/Card'
import CompanyServices from '../components/company-services/CompanyServices'
// import AboutConsultant from '../components/about-consultant/AboutConsultan
import AboutConsultant from "../components/about-consultant/AboutConsultant"
import Hero from "../components/hero/Hero"
import ContactForm from '../components/contact-form/ContactForm'

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
