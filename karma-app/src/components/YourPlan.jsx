import React from 'react'

 const YourPlan = () => {
  return (
    /* This is main body start of choose your plan */
    <div className='parent-Plan-section'>
        
        <div className='choose-your-plan'>
            <h2>Choose Your Plan</h2>
            <p>Neque porro quisquam est, qui dolorem ipsum quia sed 
               ut perspiciatis. Nam libero tempore, cum soluta 
               nobis est eligendi optio cumque.
            </p>
            <a href='#'>Click for more</a>

        </div>


        <div className='started-plan'>
            <h4 className='main-tilte'>Starter Plan</h4>
            <p><span className='dolor'>$10</span>/month</p>
            <p className='services'>14-day money back guarantee</p>
            <p className='services'>Own Analytics Platform</p>
            <p className='services'>SEO Audit</p>
            <p className='services'>SEO Optimisation</p>
            <p className='services'>24/7 Support</p>
            <div className="btn btn-danger btn-smart" id='btn-id'>Buy Plan</div>
        </div>
        


        <div className='premium-plan'>
            <h4 className='premium-tilte'>Premium Plan</h4>
            <p><span className='dolor2'>$30</span>/month</p>
            <p className='premium-services'>14-day money back guarantee</p>
            <p className='premium-services'>Own Analytics Platform</p>
            <p className='premium-services'>SEO Audit</p>
            <p className='premium-services'>SEO Optimisation</p>
            <p className='premium-services'>Speed Optimisation</p>
            <p className='premium-services'>24/7 Support</p>
            <div className="btn btn-danger btn-smart" id='btn-id'>Buy Plan</div>
        

        </div>
    </div>
  )
}
export default YourPlan;
