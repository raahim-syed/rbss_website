import "./consultant-work.css"
import consultantWork from "../../../../assets/data/consultant-work.json"

import Heading from '../../../../components/heading/Heading'
import StyledList from "../../../../components/styled-list/StyledList"
import ButtonPrimary from "../../../../components/buttons/ButtonPrimary"

const ConsultantWork = ({extraClasses, ...props}) => {
  return (
    <>
      <section className={extraClasses ? `consultant-work-section ${extraClasses}` : `consultant-work-section`} >
        <section className="container bg-dark rounded" style={{padding:"4rem", borderRadius:"20px"}}>
          
          <Heading mode='light' bottom={true} heading="His Stunning Work" subHeading="Portfolio" 
            paragraph="He has managed security in MENA for a US-based oil company for fifteen years, with zero Lost Time Injuries, and recovered stranded employees and assets worth millions of dollars from high-risk areas in Pakistan and Libya." />
          
          <article className='consultant-work grid' style={{marginTop: "3.5rem", alignItems: "top", justifyContent: "center"}}>
            <div className="left">
              {consultantWork.map((work, index) => index < 4 ? <StyledList key={index} description={work} /> : "" )}
            </div>

            <div className="right">
            {consultantWork.map((work, index) => (index > 3) ? <StyledList key={index} description={work} /> : "" )}
            </div>
          </article>
            <div className="flex flex-center">
              <ButtonPrimary type="light" href="/#contact" text="Contact Us" extraClasses=" mt-2" />
            </div>
        </section>

      </section>
    </>
  )
}

export default ConsultantWork
