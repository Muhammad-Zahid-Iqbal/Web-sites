import React from 'react'

const Footer = () => {
  return (
    <div className='parent-footer'>
        <div className='logo-address'>
            <img src='/img/footer-logo-5.png'></img>
            <p id='p-add'>425 1st Street, San Francisco, California, USA</p>
            <p id='p-email'>info@financed.com</p>
            <p id='phone'>(855) 233-5385</p>

        </div>


        <div className='QUICK-LINKS'>
            <h5 id='link-h5'>QUICK LINKS</h5>
            <p id='quick-p'>Resources</p>
            <p id='quick-common-p'>Podcast</p>
            <p id='quick-common-p'>Help Center</p>
            <p id='quick-common-p'>Terms & Privacy</p>
            <p id='quick-common-p'>Pricing</p>
            <p id='quick-common-p'>Categories</p>

        </div>


        <div className='SUPPORT'>
            <h5 id='link-h5'>SUPPORT</h5>
            <p id='quick-p'>FAQ</p>
            <p id='quick-common-p'>Guides & Tutorials</p>
            <p id='quick-common-p'>Case Studies</p>
            <p id='quick-common-p'>Webinars</p>
            <p id='quick-common-p'>Tweet @ Us</p>
            <p id='quick-common-p'>Download</p>
        </div>


        <div className='SUBSCRIBE-US'>
            <h5 id='link-h5'>SUBSCRIBE US</h5>
            <input id='textbox-id' type="email" name="email" placeholder="Your Email"></input>
            <input id='btn-footer' type="button" value="->"></input>

            <div className='social-footer-icon'>
                 <img id='footer-facebook' src='/img/facebook-icon.png'></img>
                 <img id='footer-tumblr' src='/img/tumblr.png'></img>
                 <img id='footer-twitter' src='/img/twitter.png'></img>
                 <img id='footer-youtube' src='/img/youtube-play.png'></img>

            </div>

        </div>

    </div>
  )
}

export default Footer;