import React from 'react'

const PriceTable = () => {
  return (
    <div className='parent-PriceTable'>

        <div className='title-price'>
            <p>PRICING TABLE</p>
            <h5>Find the plan that’s right for you</h5>

        </div>

        <div className='table'>
            <div id='table-content'>
                <p id='p1'>INDIVIDUAL</p>
                <p id='p2'>AWESOME</p>
                <p id='p3'>BUSINESS</p>

            </div>
            <div className='table-dolar'>
                <h5 id='free'>Free</h5>
                <h3 id='dolor-h3'>$30.00</h3>
                <h3 id='high-dolar'>$90.00</h3>
            </div>

            <div className='parent-content-table'>
                <div id='para-1-content'>
                    <p>1 Social Profile per Platform</p>
                    <p>10 Scheduled Posts per Profile</p>
                    <p>10 Scheduled Posts per Profile</p>
                </div>
                <div id='para-2-common'>
                    <p>1 Social Profile per Platform</p>
                    <p>10 Scheduled Posts per Profile</p>
                    <p>10 Scheduled Posts per Profile</p>
                </div>
                <div id='para-2-common'>
                    <p>1 Social Profile per Platform</p>
                    <p>10 Scheduled Posts per Profile</p>
                    <p>10 Scheduled Posts per Profile</p>
                </div>
                
            </div>
            <div className='btn-table-common'>
                    <a id='btn1' href='#'>GET STARTED</a>
                    <a id='btn2' href='#'>GET STARTED</a>
                    <a id='btn3' href='#'>GET STARTED</a>
                </div>

        </div>

    </div>
  )
}

export default PriceTable;