import React, { useState } from 'react';
import {
  ContainerHeader,
  BoxLogo,
  NavMenu,
  MenuToggle,
  Overlay,
  MobileDrawer
} from './style';
import logo from '../../assets/logo.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <ContainerHeader>
        {/* Menu Desktop - Esquerda */}
        <NavMenu aria-label="Navegação primária esquerda">
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#products">MÓVEIS</a></li>
          </ul>
        </NavMenu>

        {/* Logo Central */}
        <BoxLogo>
          <img src={logo} alt="Logo Woodland" />
        </BoxLogo>

        {/* Menu Desktop - Direita */}
        <NavMenu aria-label="Navegação primária direita">
          <ul>
            <li><a href="#about">SOBRE NÓS</a></li>
            <li><a href="#contact">CONTATO</a></li>
          </ul>
        </NavMenu>

        {/* Ícone de hambúrguer para mobile */}
        <MenuToggle
          type="button"
          onClick={toggleMenu}
          aria-label="Abrir menu de navegação"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </MenuToggle>
      </ContainerHeader>

      {/* Fundo escuro com desfoque */}
      <Overlay $isOpen={isMobileMenuOpen} onClick={closeMenu} />

      {/* Card lateral deslizante com opções empilhadas */}
      <MobileDrawer $isOpen={isMobileMenuOpen} aria-hidden={!isMobileMenuOpen}>
        <div className="drawer-header">
          <button type="button" onClick={closeMenu} aria-label="Fechar menu">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <ul>
          <li>
            <a href="#home" onClick={closeMenu}>
              HOME
            </a>
          </li>
          <li>
            <a href="#products" onClick={closeMenu}>
              MÓVEIS
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              SOBRE NÓS
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              CONTATO
            </a>
          </li>
        </ul>
      </MobileDrawer>
    </>
  );
};

export default Header;