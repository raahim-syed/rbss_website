import AboutCompany from '../sections/about-company/AboutCompany'
import CompanyServices from '../sections/company-services/CompanyServices'
import AboutConsultant from "../sections/about-consultant/AboutConsultant"
import Hero from "../sections/hero/Hero"
import Contact from "../sections/contact/Contact"
import Companies from '../sections/companies/Companies'

const Home = () => {
  return (
    <>
      <Hero />
      <Companies extraClasses="mt-3" />
      <AboutCompany extraClasses="mt-4" />
      <CompanyServices extraClasses="mt-4 ptb-2 bottoms-rounded" />
      <AboutConsultant extraClasses="mt-4" />
      <Contact extraClasses="mt-4" id="contact" />
    </>
  )
}

export default Home
