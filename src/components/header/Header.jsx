import React from 'react'
import { BoxLogo, ContainerHeader, NavMenu } from './style'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <ContainerHeader>
      <NavMenu aria-label="Navegação primária esquerda">
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT US</a></li>
          <li><a href="#products">FURNITURE</a></li>
        </ul>
      </NavMenu>

      <BoxLogo>
        <img src={logo} alt='logo'/>
      </BoxLogo>

      <NavMenu aria-label="Navegação primária direita">
        <ul>
          <li><a href="#categories">STORES</a></li>
          <li><a href="#contact">CONTACT US</a></li>
          <li><a href="#contact">OFFICE</a></li>
        </ul>
      </NavMenu>
    </ContainerHeader>
  )
}

export default Header
