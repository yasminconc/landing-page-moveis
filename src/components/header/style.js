import styled from "styled-components"

export const ContainerHeader = styled.div `
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 7.25rem;
  width: 100%;

  background: ${({theme}) =>  theme.colors.primary};
  font-family: ${({theme}) =>  theme.fonts.title};
  font-weight: 600;
  z-index: 100;

  a {
    color: white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 2rem;
    height: 6rem; /* Reduz um pouco o header em telas intermediárias */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 1.25rem;
    height: 4rem; /* Altura mais enxuta no mobile */
  }
`

export const BoxLogo = styled.div `
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 1;

  img {
    display: block;
    height: auto;

    /* A largura escala dinamicamente:
       - Mínimo no celular: 85px
       - Escala fluida: 11vw da largura da tela
       - Máximo no desktop: 145px (ou o tamanho original do seu Figma)
    */
    width: clamp(85px, 11vw, 145px);

    /* Sombra suave para destacar o selo sobreposto à imagem escura do Hero */
    filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.15));
    transition: width 0.2s ease;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    img {
      /* Ajuste específico para mobile mantendo o selo ultrapassando */
      width: clamp(80px, 20vw, 110px);
    }
  }
  
`

export const NavMenu = styled.nav `
  ul {
    display: flex;
    align-items: center;
    gap: 3.5rem;
    list-style: none;
  }

  a {
    color: ${({ theme }) => theme.colors.surface};
    letter-spacing: 0.08em;
    transition: opacity 0.2s ease;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: none;
    }
  }
`


