import "./footer.css"
import logo from "../../assets/images/logo.svg"
import { Link } from "react-router-dom"

const Footer = ({extraClasses, ...props}) => {
  return (
    <footer className={extraClasses ? `site-footer bg-dark tops-rounded ${extraClasses}` : `site-footer bg-dark tops-rounded`} props >
      <section className="container grid grid-center">

        <img src={logo} alt="rbss-logo" />

        <div className="links">
          <ul className="flex flex-center">
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/about-consultant">About</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="copyright">
          <p>Copyright &copy; 2023, All rights reserved.</p>
        </div>

      </section>  
    </footer>
  )
}

export default Footer
