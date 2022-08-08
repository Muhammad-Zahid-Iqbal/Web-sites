import React from 'react'

const TeamMember = () => {
  return (
    <div className='parent-TeamMember'>

        <div className='parent-feature1'>
             <h5 id='small-h5-title'>TEAM MEMBERS</h5>
             <h2 id='big-feature-title'>Get to know<span id='title-color'> amazing people</span></h2>
        </div>

        <div className='parent-member'>

        <div className='member-1'>
            <img src='/img/member_1.png'>
            </img>
            <h3 id='common-members-h3'>Morgan Guadis</h3>
            <p id='members-p'>DESIGNER</p>

        </div>

        <div className='member-2'>
        <img src='/img/member_2.png'></img>
        <h3 id='common-members-h3'>John Senating</h3>
        <p id='members-p'>DIRECTOR</p>

        </div>

        <div className='member-3'>

        <img src='/img/member_3.png'></img>
        <h3 id='common-members-h3'>Sandi Hormez</h3>
        <p id='members-p'>DIRECTOR</p>
        </div>

        <div className='member-4'>
        <img src='/img/member_4.png'></img>
        <h3 id='common-members-h3'>Morgan Guadis</h3>
        <p id='members-p'>DESIGNER</p>

        </div>
        </div>

    </div>
  )
}

export default TeamMember;