import React from 'react'
import './Section3.scss'
import CheckIcon from '@mui/icons-material/Check';

const Section3 = () => {
  return (
    <div className='section3'>
        <div className="header">What We Offer</div>
        <div className="section3-container">
          <div className="section3-left">
                    <ul>
          <li><CheckIcon className='icon'/>Open 24 hours, whenever you need.</li>
          <li><CheckIcon className='icon'/>Personal training available.</li>
          <li><CheckIcon className='icon'/>Men and Women's locker rooms.</li>
          <li><CheckIcon className='icon'/>Family room for children accessibility.</li>
          <li><CheckIcon className='icon'/>Sauna with towels provided.</li>

        </ul>
          </div>
          <div className="section3-left">
                    <ul>
          <li><CheckIcon className='icon'/>Showers with amenities.</li>
          <li><CheckIcon className='icon'/>Professional Rogue power racks</li>
          <li><CheckIcon className='icon'/>Calisthenics training area.</li>
          <li><CheckIcon className='icon'/>Yoga, Cycle, and other classes.</li>
          <li><CheckIcon className='icon'/>Personal fitness rooms available.</li>

        </ul>
          </div>
        </div>

    </div>
  )
}

export default Section3