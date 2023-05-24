import React from 'react'
import './App.scss'
import Nav from './Nav'
import Hero from './Hero'
import About from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Location from './Location'

function App() {


  return (
<div className="app">
<Nav />
<Hero />
<About />
<Section2 />
<Section3 />
<Location />
</div>
  )
}

export default App
