import React from 'react'
import './Section2.scss'
import img1 from './assets/section2-img1.jpg'

const Section2 = () => {
  return (
    <div className='section2'>
      <div className="header">Gym Name</div>
      <div className="section2-body">
        <div className="img-container">
                  <img src={img1} alt="" />
        </div>
        <div className="section2-text">
          <div className='section2-header'>A Real Gym For Real Goals</div>
          <br />
          <div className='section2-subheader'>Here to support you</div>
          <br />
          Family owned and operated since 1975. Since then we have strived to
          deliver a <span className='highlight'>safe</span> and <span className='highlight'>judgement-free</span> zone to pursue a better you. We are 
          one location and have been since the beginning to ensure our full priority
          and focus to delivering the best possible experience here at Gym Name. Our
          on-site personal fitness trainers have dedicated their careers in catering
          to all types and fitness levels to deliver on whatever goals you pursue. Come 
          join us today to upgrade your lifestyle and your health no matter what 
          experience level you may be. What are you waiting for?
        </div>
      </div>
    </div>
  )
}

export default Section2