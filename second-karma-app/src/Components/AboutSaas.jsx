import React from 'react'

const AboutSaas = () => {
  return (
    <div className='parent-aboutSaas'>

        <div className='aboutSaas-img'>
            <img src='/img/about_img.png'></img>

        </div>
        
        <div className='aboutSaas-content'>
            <h5 id='small-title'>ABOUT SAAS</h5>
            <h3 id='big-title'>Somethings about server <span id='color-big-title'> analysis services.</span></h3>
            <p id='aboutSaas-para'>Thanks to the commonwealth of Virginia, no matter 
                where you live in the U.S., your documents can now
                 be notarized online by a trusted notary.
            </p>
           
            <span className="circle">
            <i className="fa fa-play"></i>
            </span> WATCH THE VIDEO

        </div>

    </div>
  )
}

export default AboutSaas;