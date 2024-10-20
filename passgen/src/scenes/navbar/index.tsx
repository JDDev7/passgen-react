import linkedIn from '@/assets/linkedin.svg'


const Navbar = () => {

  return (
    <header>
        <nav>
            <div className="navbar-container">
            <div className="navbar-left">
                          <span className='logo-span-colored-1'>Pass</span><span className='logo-span-colored-2'>Gen</span>
                      </div>

                <div className="navbar-right">
                              <a href="https://github.com/JDDev7" target="_blank" rel="noreferrer">Github</a>
                              <a href="https://jddev-portfolio.netlify.app" target="_blank" rel="noreferrer">Portfolio</a>
                              <div className="social-logos">
                                  <a href="https://www.linkedin.com/in/jdmorenopulido/" target="_blank" rel="noreferrer"><img src={linkedIn} alt="" /></a>
                              </div>
                          </div>
                          </div>
        </nav>
    </header>
  )
}

export default Navbar