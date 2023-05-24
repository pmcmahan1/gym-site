import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import './Location.scss'
import googleIcon from './assets/google-icon.png'
import googleMaps from './assets/google-maps.png'
import starFull from './assets/star-full.png'
import starHalf from './assets/star-half.png'
import PhoneIcon from '@mui/icons-material/Phone';

const Location = () => {



  return (
    <div className='location'>
        <div className="header">Where We Are</div>
        <div className="location-container">
            <div className="location-container-left">
            <div className="location-name">Gym Name Cincinnati
            <img src={googleIcon} alt="" className='icon'/>
            <img src={starFull} alt="" className='icon'/>
            <img src={starFull} alt="" className='icon'/>
            <img src={starFull} alt="" className='icon'/>
            <img src={starFull} alt="" className='icon'/>
            <img src={starHalf} alt="" className='icon'/>
            </div>
            <div className="location-number">
                <PhoneIcon className='phone-icon' />
                (888) 888-8888
            </div>
            <div className="location-address">
            <img src={googleMaps} alt="" className='icon'/>
            243 Euclid St.
            Cincinnati, OH 45201
            </div>
        </div>
        <div className="location-container-right">
            Map
        </div>
        </div>
    </div>
  )
}

export default Location