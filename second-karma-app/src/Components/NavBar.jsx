import React from 'react'

const NavBar = () => {
  return (
    /* ////// Main header start here ////////
    //////////////////////////////////////// */ 
    <div className='main-header'>

        <div className='content-header'>

            <div className='header-logo'>
              <img id='img-logo' src='/img/logo.png'></img>
              <h2>Karma</h2>
            </div>

            <div className='parent-NavBar'>
                <ul className='nav-ul-class'>
                    <li className='active'><a href='#'>Home</a>
                        <div className='sub-menu-1'>  
                        <ul>                     
                         <li><a href='#'>Home Karma</a></li>
                        <li><a href='#'>Home Business</a></li>
                        <li><a href='#'>Home Saas</a></li>
                        <li><a href='#'>Home Political</a></li>
                        <li><a href='#'>Home Education</a></li>
                        <li><a href='#'>Home Event</a></li>
                        <li><a href='#'>Home Church</a></li>
                        <li><a href='#'>Home BarberShop</a></li>
                        <li><a href='#'>Home Yoga</a></li>
                        <li><a href='#'>Home Restuarent</a></li>
                        <li><a href='#'>Home Travel</a></li>
                        <li><a href='#'>Home Construction</a></li>
                        </ul>
                        </div>

                    </li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Features</a>
                    <div className='sub-menu-1'>
                      <ul>
                        <li><a href='#'>Features Saas</a></li>
                        <li><a href='#'>Features Details Saas</a></li>
                      </ul>
                    </div>
                    </li>
                    <li><a href='#'>Blog</a>

                    <div className='sub-menu-1'>
                      <ul>
                        <li><a href='#'>Blog Saas</a></li>
                        <li><a href='#'>Post Saas</a></li>
                      </ul>
                    </div>

                    </li>
                    <li><a href='#'>Pricing</a></li>
                    <li><a href='#'>Contact Us</a></li>
                </ul>

            </div>
            <div className='signIn-Out'>
            <a id='sign-in' href='#'>SIGN IN</a>
            <a id='sign-up' href='#'>SIGN UP</a>
            </div>
           
        </div>

        <div className='centeral-content'>
        <div className='page-content'>
            <h4 id='page-title'>Legally Notarize Your Documents Online. Anytime.</h4>
            <p id='page-para'>Online 24x7. Legal notarizations.</p>
            <a id='get-started' href='#'>LET'S GET STARTED</a>
        </div>
        <div id='page-img'>
          <img id='img-style' src='/img/banner_image.png'></img>
          
        </div>
        </div>
    </div>
  )
}

export default NavBar;