import React from 'react'
import { HomeContainer } from './style'
import Header from '../../components/header/Header'
import { Hero } from '../../sections/hero/Hero'
import RoomsNav from '../../sections/roomsNav/RoomsNav'
import About from '../../sections/about/About'

const Home = () => {
  return (
    <HomeContainer>
      <Header/>
      <Hero/>
      <RoomsNav/>
      <About/>
    </HomeContainer>
  )
}

export default Home
