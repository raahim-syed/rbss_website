import "./locations-managed.css"

const LocationsManaged = ({extraClasses,locations, middle=false, ...props}) => {
  return (
    <section className={`locations-managed-section ${extraClasses}`} props>
        <div className="container-sm">

            <h3 className="locations-top-heading" style={middle ? {textAlign:"center", marginBottom: "1.5rem"} : {textAlign:"left"} } >Worked In High Risk Locations:</h3>

            <div className="locations grid grid-center">
                {locations.map((location, index) => (
                    <h2 className="location flex" style={{justifyContent:"left"}} key={index}>
                        {location}
                    </h2>
                ))}
            </div>
        </div>
    </section>
  )
}

export default LocationsManaged
