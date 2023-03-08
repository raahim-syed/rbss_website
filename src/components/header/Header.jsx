import logo from "../../assets/images/logo.svg"
import { NavLink } from "react-router-dom"
import ButtonPrimary from "../buttons/ButtonPrimary"
import "./header.css"

const Header = ({extraClasses, ...props}) => {
  return (
    <header className={`site-header ${extraClasses ? extraClasses : ""}`} props >
      <div className="container flex flex-space-between">
        <img className="logo" src={logo} alt="Logo" />

          <nav className='site-nav'>
            <ul className="flex flex-center">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about-consultant">About</NavLink>
              </li>

              <ButtonPrimary text="Contact Us" href="#contact" />
            </ul>
          </nav>
      </div>
    </header>
  )
}

export default Header
