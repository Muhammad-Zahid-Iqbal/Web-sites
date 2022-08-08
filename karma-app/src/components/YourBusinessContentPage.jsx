import React from 'react'

const YourBusinessContentPage = () => {
  return (
    <div className='parent-businessPage'>
        <div className='business-image'>
            <img id='business-img' src='/img/yourBusinessImage.png'></img>
        </div>

        <div className='business-details'>
            <div className='entrepreneurs'>
              <div className='img-title'>
                 <img src='/img/icon.png'></img>
                 <h4 id='common-h-p'>For entrepreneurs</h4>
              </div>
                    <p id='common-para'>Totam rem aperiam, eaque ipsa quae ab illo
                         inventore veritatis et quasi architecto beatae 
                         vitae dicta sunt explicabo.
                    </p>
            </div>
            <div className='startups'>
            <div className='img-title'>
                 <img src='/img/icon.png'></img>
                    <h4 id='common-h-p'>For startups</h4>
             </div>       
                    <p id='common-para'>Eaque ipsa quae ab illo inventore veritatis et quasi architecto 
                       beatae vitae dicta sunt explicabo. Nemo enim ipsam.
                    </p>
            </div>
            <div className='employees'>
            <div className='img-title'>
                 <img src='/img/icon.png'></img>
                <h4 id='common-h-p'>For employees</h4>
            </div>    
                <p id='common-para'>Sed ut perspiciatis unde omnis iste natus error sit
                   voluptatem accusantium doloremque laudantium, totam.</p>

            </div>

        </div>

    </div>
  )
}

export default YourBusinessContentPage;