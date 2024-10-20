import linkedIn from '@/assets/linkedin.svg'
import twitter from '@/assets/twitter.svg'


const Navbar = () => {

  return (
    <header>
        <nav>
            <div className="navbar-container">
            <div className="navbar-left">
                          <span className='logo-span-colored-1'>Pass</span><span className='logo-span-colored-2'>Gen</span>
                      </div>

                <div className="navbar-right">
                              <a href="#">Github</a>
                              <a href="#">Portfolio</a>
                              <div className="social-logos">
                                  <a href="#"><img src={linkedIn} alt="" /></a>
                                  <a href="#"><img src={twitter} alt="" /></a>
                                  
                              </div>
                          </div>
                          </div>
        </nav>
    </header>
  )
}

export default Navbar