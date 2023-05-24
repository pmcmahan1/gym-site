import React from 'react'
import './Hero.scss'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-container">
      <div className="hero-text">Your New Fitness Journey Awaits</div>
      <div className="hero-text sub-text">Learn More</div>
      <KeyboardDoubleArrowDownIcon className='hero-down' />
      </div>
    </div>
  )
}

export default Hero