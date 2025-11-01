import React from 'react'
import { NavBar } from './shared/navbar/NavBar'
import HeroSection from './components/heroSection/heroSection'
import Hero from './components/heroSection/hero'
import ServicesSection from './components/package/serviceCard/ServiceCard'
import Location_Service from './components/package/location/Location'
import HomePageAboutUs from './components/aboutus/AboutUs'
import { HFAQ } from './components/HFAQ/HeroFAQ'
import HSupport from './components/HSupport/HSupport'

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
      <div>
        <Location_Service/>
      </div>
      <div>
        <HomePageAboutUs/>
      </div>
      <div>
        <HFAQ/>
      </div>
      <div>
        <HSupport/>
      </div>
    </div>
  )
}

export default Home
