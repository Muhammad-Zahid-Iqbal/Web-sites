import React from 'react'

const AppGoogle = () => {
  return (
    <div className='parent-AppGoogle'>
        <div className='app-content'>
            <h5>Download the Inbox app to get started.</h5>
            <img src='/img/star.png'></img>
            <p>Base on 2,000+ reviews</p>
        </div>
        <div className='app-imges'>
            <img  src='/img/app-store.png'></img>
            <img id='img-googl' src='/img/google-play.png'></img><br/>
            <p id='googl-para'>Also available on the web at inbox.google.com.</p>

        </div>

    </div>
  )
}

export default AppGoogle;