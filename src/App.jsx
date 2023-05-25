import React, { useRef } from 'react'
import './App.scss'
import Nav from './Nav'
import Hero from './Hero'
import About from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Location from './Location'
import Membership from './Membership'
import Footer from './Footer'

function App() {

  const firstItemRef = useRef(null);

  return (
<div className="app">
<Nav />
<Hero ref={firstItemRef} />
<About />
<Section2 />
<Section3 />
<Location />
<Membership />
<Footer />
</div>
  )
}

export default App
