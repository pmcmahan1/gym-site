import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Location.scss'
import googleIcon from './assets/google-icon.png'
import googleMaps from './assets/google-maps.png'
import starFull from './assets/star-full.png'
import starHalf from './assets/star-half.png'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';

const Location = () => {

    const containerStyle = {
        width: '400px',
        height: '400px'
      };
      
      const center = {
        lat: 39.1031,
        lng: -84.5120
      };

  return (
    <div className='location'>
        <div className="header">Where We Are</div>
        <div className="location-container">
            <div className="location-container-left">
            <div className="location-name">Gym Name Cincinnati
            </div>
            <div className="location-review">
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
            <div className="location-number">
                <AccessTimeIcon className='phone-icon'/>
                Hours: Open 24 Hours
            </div>
            <div className="location-address">
            <img src={googleMaps} alt="" className='icon'/>
            243 Euclid St.
            Cincinnati, OH 45201
            </div>
        </div>
        <div className="location-container-right">
        <LoadScript
        googleMapsApiKey="AIzaSyB1yiB1XKpZ9hneEWyvoY5wTldQ3Ba-lMU"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        >
        </GoogleMap>
      </LoadScript>
        </div>
        </div>
    </div>
  )
}

export default Location