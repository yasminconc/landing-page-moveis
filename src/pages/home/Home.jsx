import React from 'react'
import { HeroPlaceholder, HomeContainer } from './style'
import Header from '../../components/header/Header'
import { Hero } from '../../sections/hero/Hero'
import RoomsNav from '../../sections/roomsNav/RoomsNav'

const Home = () => {
  return (
    <HomeContainer>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <Categories /> */}
      {/* <About /> */}
      {/* <Footer /> */}

      <Header/>
      <Hero/>
      <RoomsNav/>
    </HomeContainer>
  )
}

export default Home
