import "./locations-managed.css"
import locations from "../../assets/data/locations.json"

const LocationsManaged = ({extraClasses, ...props}) => {
  return (
    <section className={`locations-managed-section ${extraClasses}`} props>
        <div className="container">
            <h3 className="locations-top-heading">Worked In High Risk Locations:</h3>

            <div className="locations flex flex-space-between">
                {locations.map((location, index) => (
                    <h2 className="location" key={index}>
                        {location}
                    </h2>
                ))}
            </div>
        </div>
    </section>
  )
}

export default LocationsManaged
