import styled from 'styled-components';
import heroBg from '../../assets/new.svg'; // Substitua pelo nome exato do seu arquivo

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  /* Altura da tela menos o Header (7.25rem = 116px) */
  min-height: calc(100vh - 7.25rem);
  min-height: calc(100dvh - 7.25rem); /* dvh = dynamic viewport height */
  
  /* Gerenciamento do Fundo */
  background-image: url(${heroBg});
  background-size: cover;          /* Cobre o container sem distorcer as proporções */
  background-position: right center; /* Mantém a cozinha em foco mesmo em telas mais estreitas */
  background-repeat: no-repeat;

  /* Alinhamento do Conteúdo */
  display: flex;
  align-items: center;
  padding: 4rem 6rem;

  /* Ajuste para notebooks e telas médias */
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 3rem 2rem;
    background-position: 70% center; /* Leve ajuste para equilibrar texto e imagem */
  }

  /* Ajuste para mobile/telas verticais */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: calc(100vh - 4rem);
    min-height: calc(100dvh - 4rem); /* Preenche com precisão absoluta a área útil do celular */
    padding: 2.5rem 1.5rem;
    /* Overlay sutil para garantir legibilidade do texto no mobile */
    background-image: linear-gradient(
      rgba(20, 20, 20, 0.78),
      rgba(20, 20, 20, 0.85)
    ), url(${heroBg});
  
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 2;

  h1 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: clamp(2rem, 4vw, 3.5rem); 
    line-height: 1.20;
    color: ${({ theme }) => theme.colors.surface};
    letter-spacing: 0.05em;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.surface};
  }

  .divider {
    width: 100px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const DiscoverButton = styled.button`
  align-self: flex-start;
  padding: 0.85rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: 0.12em;
  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:active {
    transform: scale(0.98);
  }
`;