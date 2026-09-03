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

  a {
    color: white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 1.5rem;
  }
`

export const BoxLogo = styled.div `
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 10;

  img {
    display: block;
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


