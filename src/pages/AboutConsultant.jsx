import React from 'react'
import Heading from '../components/heading/Heading'
import LocationsManaged from '../components/locations-managed/LocationsManaged'

const AboutConsultant = () => {
  return (
    <>
      <section className="container mt-4">
        <Heading mode="dark" subHeading="About Consultant" heading="Some Random Text" paragraph="Some  Random Description" />
        <LocationsManaged extraClasses="mt-4" />
      </section>
    </>
  )
}

export default AboutConsultant
