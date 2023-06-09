import React from 'react'
import './Section1.scss'
import img1 from './assets/about-1.jpg'
import img2 from './assets/about-2.jpg'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-left">
            <h1>More Than a Gym</h1>
            <ul>
                <li>Open 24 Hours</li>
                <li>Group and Personal Fitness Training</li>
                <li>Free Weights and Olympic Platforms</li>
                <li>Limitless Cardio Equipment</li>
                <li>...And more!</li>
            </ul>
        </div>
        <div className="about-right">
            <div className="img-container">
                <img src={img2} alt="" className='img-item'/>
                <img src={img1} alt="" className='img-item'/>
            </div>
        </div>
    </div>
  )
}

export default About