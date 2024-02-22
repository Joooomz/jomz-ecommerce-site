import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowcase from './CategoryShowcase'
import Register from './Register'
import LocationSpread from './LocationSpread'
import AboutSection from './AboutSection'
import AppSection from './AppSection'
import Sponsors from './Sponsors'

const home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowcase/>
      <Register/>
      <LocationSpread/>
      <AboutSection/>
      <AppSection/>
      <Sponsors/>
    </div>
  )
}

export default home