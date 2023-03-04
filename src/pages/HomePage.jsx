import React from 'react'


import AboutCompany from '../sections/about-company/AboutCompany'
import Card from '../components/card/Card'
import CompanyServices from '../sections/company-services/CompanyServices'
// import AboutConsultant from '../sections/about-consultant/AboutConsultan
import AboutConsultant from "../sections/about-consultant/AboutConsultant"
import Hero from "../sections/hero/Hero"
import Contact from "../sections/contact/Contact"

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutCompany />
      <CompanyServices />
      <AboutConsultant />
      <Contact />
    </>
  )
}

export default HomePage
