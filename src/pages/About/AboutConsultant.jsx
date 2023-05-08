import locations from "../../assets/data/locations.json"

import LocationsManaged from '../../components/locations-managed/LocationsManaged'
import Companies from '../../sections/companies/Companies'
import ConsultantWork from './page-sections/consultant-work/ConsultantWork'
import ConsultantDetails from './page-sections/consultant-details/ConsultantDetails'
import PhotoGallery from './page-sections/photo-gallery/PhotoGallery'


const AboutConsultant = () => {
  return (
    <>
      <h3 className='mt-3' style={{fontFamily: "Montserrat",textAlign: "center"}}>Organizations Worked With: </h3>
      <Companies extraClasses="mt-2" />

      <ConsultantDetails extraClasses="mt-3" />

      {/* <PhotoGallery extraClasses="mt-3" /> */}

      <LocationsManaged middle={true} locations={[...locations]} extraClasses="mt-3" />

      <ConsultantWork extraClasses="mt-3" />
    </>
  )
}

export default AboutConsultant
