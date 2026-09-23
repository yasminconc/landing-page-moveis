import React from 'react'
import { HomeContainer } from './style'
import Header from '../../components/header/Header'
import { Hero } from '../../sections/hero/Hero'
import RoomsNav from '../../sections/roomsNav/RoomsNav'
import About from '../../sections/about/About'
import Products from '../../sections/products/Products'
import WhyChooseUs from '../../sections/whyChooseUs/WhyChooseUs'
import CustomRequest from '../../sections/customRequest/CustomRequest'

const Home = () => {
  return (
    <HomeContainer>
      <Header/>
      <Hero/>
      <RoomsNav/>
      <About/>
      <Products/>
      <WhyChooseUs/>
      <CustomRequest/>
    </HomeContainer>
  )
}

export default Home
