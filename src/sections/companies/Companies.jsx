import kcaDeutag from "../../assets/company-logos/kca-deutag.png"
import usStateDepartment from "../../assets/company-logos/us-state-department.png"
import weatherford from "../../assets/company-logos/weatherford.png"

import "./companies.css"

const Companies = ({extraClasses, ...props}) => {
  return (
    <section className={`companies-section ${extraClasses}`} props>
        <div className="container">
            <section className="images flex flex-center">
                <img src={weatherford} alt="weatherford" />
                <img src={usStateDepartment} alt="us-state-department" />
                <img src={kcaDeutag} alt="kca-deutag" />
            </section>
        </div>
    </section>
  )
}

export default Companies
