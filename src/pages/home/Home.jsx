import React from 'react'
import { HeroPlaceholder, HomeContainer } from './style'
import Header from '../../components/header/Header'
import { Hero } from '../../sections/hero/Hero'

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
    </HomeContainer>
  )
}

export default Home
