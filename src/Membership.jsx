import React from 'react'
import './Membership.scss'
import img from './assets/member-1.jpg'

const Membership = (props) => {
  return (
    <div className='membership'>
        <div className="header">Our Membership</div>
        <div className="membership-container">
            <div className="membership-left">
                <div className="membership-headtext">Join Us Today.</div>
                <div className="membership-bodytext">
                    Our membership rates begin at $40.00 per person (tax applicable) with regular
                    seasonal discount rates and a discounted couples pass is available. Couples must
                    arrive together at the gym during application to be eligible for the discount.
                    Your membership provides you all-access to any of the gym facilities, including
                    our lockers, showers, saunas, free weight and class rooms. We look forward to
                    you joining our family to strive for a better you.
                </div>
                <div className="membership-signup">
                    <button onClick={() => props.popup(true)}>Sign up</button>
                </div>
            </div>
            <div className="membership-right">
                <img src={img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Membership