import styled from "styled-components"

export const ContainerHeader = styled.div `
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 7.25rem;
  width: 100%;

  background: ${({theme}) =>  theme.colors.primary};
  font-family: ${({theme}) =>  theme.fonts.body};
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

export const NavMenu = styled.nav`
  display: flex;
  flex: 1;

  /* Alinha os links do menu da esquerda para perto do centro */
  &:first-of-type {
    justify-content: flex-end;
    /* Distância entre a última opção ("MÓVEIS") e o centro da logo */
    padding-right: clamp(7rem, 12vw, 11rem);
  }

  /* Alinha os links do menu da direita para perto do centro */
  &:last-of-type {
    justify-content: flex-start;
    /* Distância entre o centro da logo e a primeira opção ("SOBRE NÓS") */
    padding-left: clamp(7rem, 12vw, 11rem);
  }

  ul {
    display: flex;
    align-items: center;
    /* Espaço entre as opções do mesmo lado (ex: HOME e MÓVEIS) */
    gap: 5rem;
    list-style: none;
  }

  a {
    color: ${({ theme }) => theme.colors.surface || '#ffffff'};
    letter-spacing: 0.08em;
    transition: opacity 0.2s ease;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;


/* Botão Hambúrguer (exibido apenas em tablets/mobile) */
export const MenuToggle = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.surface || '#ffffff'};
  padding: 0.5rem;
  z-index: 101;

  svg {
    width: 28px;
    height: 28px;
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

/* Fundo escuro semitransparente ao abrir o menu */
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  z-index: 998;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

/* Gaveta / Card lateral retangular móvel */
export const MobileDrawer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: min(78vw, 310px);
  height: 100vh;
  height: 100dvh;
  background-color: #1a1816;
  border-left: 1px solid rgba(186, 150, 103, 0.25);
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.75rem;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  .drawer-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 2.5rem;

    button {
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.colors.surface || '#ffffff'};
      cursor: pointer;
      padding: 0.4rem;

      svg {
        width: 24px;
        height: 24px;
        display: block;
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0;
    margin: 0;
  }

  li {
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding-bottom: 1.25rem;
  }

  a {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1.05rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    color: ${({ theme }) => theme.colors.surface || '#ffffff'};
    text-decoration: none;
    display: block;
    transition: color 0.2s ease, transform 0.2s ease;

    &:hover, &:active {
      color: ${({ theme }) => theme.colors.primary || '#ba9667'};
      transform: translateX(4px);
    }
  }
`;