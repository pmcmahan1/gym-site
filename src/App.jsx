import React, { useState } from 'react'
import './App.scss'
import Nav from './Nav'
import Hero from './Hero'
import About from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Location from './Location'
import Membership from './Membership'
import Footer from './Footer'
import Popup from './Popup'

function App() {

const [buttonPopup, setButtonPopup] = useState(false);


  return (
<div className="app">
<Nav popup={setButtonPopup} />
<Hero/>
<About />
<Section2 />
<Section3 />
<Location />
<Membership popup={setButtonPopup}  />
<Footer />
<Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
</div>
  )
}

export default App
