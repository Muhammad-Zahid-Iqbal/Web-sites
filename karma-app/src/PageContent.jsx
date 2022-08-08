import React from 'react'

const PageContent = () => {
  return (
    /* main centeral page start */
     <div className='main-page'>
        <div className='text-area'>
                 <h1>Powering the digital business simply</h1>
            <div className='paragraph'>
                 <p>We provides you with user management 
                  functionality that results in faster 
                  development, faster revenue, more users.</p>
            </div>
                  <div className='btn btn-danger btn-smart'  id='page-btn'>Get Started</div>
                  <p className='paragraph'>Companies that trust us.</p>
                  <div className='companies-design'>
                    <img src='/img/design.png' id='animation'></img>
                    <img src='/img/dm.png' id='animation'></img>
                    <img src='/img/star.png' id='animation'></img>
                  </div>
        </div>


      <div className='img-area'>
      <img src='/img/bg.png' className='img-size'></img>
      </div>

    </div>
     /* main centeral page end */
  )
}

export default PageContent;