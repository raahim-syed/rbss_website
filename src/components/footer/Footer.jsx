import "./footer.css"

const Footer = ({extraClasses, ...props}) => {
  return (
    <footer className={`site-footer ${extraClasses} tops-rounded`} props >
      <div className="container">
        <h1>Footer</h1>
      </div>  
    </footer>
  )
}

export default Footer
