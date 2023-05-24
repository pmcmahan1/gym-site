import React from 'react'
import './Nav.scss'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Nav = () => {
  return (
    <div className='nav'>
        <div className="nav-left">
            <div className="nav-logo">
            <FitnessCenterIcon />
            <div className="nav-name">
            Gym<br></br>Name
            </div>
            </div>
        </div>
        <div className="nav-middle">
            <a href="">
            <div className="nav-item">
                About Us
            </div>
            </a>
            <a href="">
            <div className="nav-item">
                Location
            </div>
            </a>
            <a href="">
            <div className="nav-item">
                Membership
            </div>
            </a>
        </div>
        <div className="nav-right">
            <button>Try For Free</button>
        </div>
    </div>
  )
}

export default Nav