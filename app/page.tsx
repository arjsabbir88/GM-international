import React from 'react'
import { NavBar } from './shared/navbar/NavBar'
import HeroSection from './components/heroSection/heroSection'
import Hero from './components/heroSection/hero'
import ServicesSection from './components/package/serviceCard/ServiceCard'

const Home = () => {
  return (
    <div>
      <div className='sticky top-0 z-50 bg-white'>
        <NavBar/>
      </div>
      <div>
        {/* <HeroSection/> */}
        <Hero/>
      </div>
      <div>
        <ServicesSection/>
      </div>
    </div>
  )
}

export default Home
