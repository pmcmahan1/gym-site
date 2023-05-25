import React from 'react'
import {Link} from 'react-scroll'
import './Nav.scss'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Nav = () => {
  return (
    <div className='nav'>
        <div className="nav-left">
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
            <div className="nav-logo">
            <FitnessCenterIcon />
            <div className="nav-name">
            Gym<br></br>Name
            </div>
            </div>
        </Link>
        </div>
        <div className="nav-middle">
            <Link to="about" spy={true} smooth={true} offset={-40} duration={500}>
            <div className="nav-item">
                About Us
            </div>
            </Link>
            <Link to="location" spy={true} smooth={true} offset={-40} duration={500}>
            <div className="nav-item">
                Location
            </div>
            </Link>
            <Link to="membership" spy={true} smooth={true} offset={50} duration={500}>
            <div className="nav-item">
                Membership
            </div>
            </Link>
        </div>
        <div className="nav-right">
            <button>Join Us</button>
        </div>
    </div>
  )
}

export default Nav