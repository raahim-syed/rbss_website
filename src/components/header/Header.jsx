import "./header.css"

const Header = () => {
  return (
    <header className="site-header">
      <div className="container flex flex-space-between">
        <img src="./logo.svg" alt="Logo" className="logo" />

          <nav className='site-nav'>
            <ul className="flex flex-center">
              <li><a href="Home">Home</a></li>
              <li><a href="About">About</a></li>
              <li><a href="Something">Something</a></li>
              <li><a href="Something" className="btn-primary-light">Something</a></li>
            </ul>
          </nav>
      </div>
    </header>
  )
}

export default Header
