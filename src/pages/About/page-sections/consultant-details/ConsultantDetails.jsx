import "./consultant-details.css"


import Heading from '../../../../components/heading/Heading'
import ButtonPrimary from "../../../../components/buttons/ButtonPrimary"

const ConsultantDetails = ({extraClasses, ...props}) => {
  return (
    <>
      <section className={extraClasses ? `consultant-details-section ${extraClasses}` : `consultant-details-section`}>
        <section className="container grid grid-center">
          <article className="consultant-description-left">
              <Heading mode='dark' bottom={false} heading="The Man Himself" subHeading="About Consultant" />

              <p>
                Introducing Muhammad Abdul Mateen Khan, an experienced security consultant with a track record of managing security challenges at national and international levels. With forty-five years of experience in the security domain, he has worked with prestigious organizations such as GOP, US State Department, and the Oil & Gas Industry.
                <br />
                <br />
                Mateen Khan is a member of security forums in the Middle East and Pakistan and has been instrumental in identifying the growing threat of terrorism in the region that impacts the oil industry. He has worked to evolve a joint response strategy for businesses across the region.
              </p>
          </article>

          <aside className='consultant-description-right bg-dark'>
            <p style={{color: "#fff"}}>
              He has managed security in MENA for a US-based oil company for fifteen years, with zero Lost Time Injuries, and recovered stranded employees and assets worth millions of dollars from high-risk areas in Pakistan and Libya.
            </p>
              <ButtonPrimary type="light" href="/#contact" text="Contact Us" />
          </aside>
        </section>
      </section>
    </>
  )
}

export default ConsultantDetails
