import React from 'react'

const Footer = () => {
  return (
    <div className='parent-footer'>
        <div className='contact-footer'>
            <img src='/img/k-footer.png' id='karma-footer'></img>
            <p id='p-common-footer'>2307 Beverley Rd, New York</p>
            <p id='p-common-footer'>+ (0712) 819 79 555</p>
            <p id='p-common-footer'>office@finance.com</p>
            <div id='social-media'>
                <img src='/img/instagram.png' id='img-social-media'></img>
                <img src='/img/facebook.png' id='img-social-media'></img>
                <img src='/img/twitter.png' id='img-social-media'></img>
                <img src='/img/youtube.png' id='img-social-media'></img>

            </div>


        </div>
        <div className='common-company-services-resources'>
            <h4 id='title-company-services-resources'>Company</h4>
            <p id='common-company-p-services-resources'>Mission</p>
            <p id='common-company-p-services-resources'>About Us</p>
            <p id='common-company-p-services-resources'>Why Choose Us</p>
            <p id='common-company-p-services-resources'>Team</p>

        </div>


        <div className='common-company-services-resources'>
        <h4 id='title-company-services-resources'>Services</h4>
            <p id='common-company-p-services-resources'>Pricing</p>
            <p id='common-company-p-services-resources'>Awards</p>
            <p id='common-company-p-services-resources'>Services</p>
            <p id='common-company-p-services-resources'>Testimonials</p>
        </div>


        <div className='common-company-services-resources'>
        <h4 id='title-company-services-resources'>Resources</h4>
            <p id='common-company-p-services-resources'>Contacts</p>
            <p id='common-company-p-services-resources'>Blog</p>
            <p id='common-company-p-services-resources'>F.A.Q.</p>
            <p id='common-company-p-services-resources'>Get a Quote</p>

        </div>


        <div className='common-company-services-resources'>
        <h4 id='title-company-services-resources'>Subscribe</h4>
        <input type="email" id="your-mail" placeholder='Your Email'/><br/>
        <input type="button" name="Get Started" value="Get Started" id="btn-footer"/>

        </div>

    </div>
  )
}

export default Footer;