import styled from 'styled-components';

export const AboutSection = styled.section`
  width: 100%;
  padding: 12rem 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md || '768px'}) {
    padding: 4rem 1.5rem;
  }
`;

export const AboutContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: clamp(2rem, 5vw, 5rem);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg || '1024px'}) {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }
`;

/* Container das imagens divididas */
export const ImageGallery = styled.div`
  display: flex;
  justify-content: center;
  gap: clamp(0.75rem, 2vw, 1.25rem);
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  /* Margem inferior de segurança para acomodar o deslocamento vertical sem bater no texto */
  padding-bottom: 2rem;

  img {
    /* Cada foto ocupa exatamente metade do espaço descontando o gap */
    width: calc(50% - 0.5rem);
    
    /* Substitui a altura fixa por proporção vertical elegante (retrato 3:4) */
    aspect-ratio: 3 / 4;
    height: auto;
    object-fit: cover;
    object-position: center;
    display: block;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

    /* Deslocamento vertical escalável */
    &:first-child {
      transform: translateY(-12px);
    }

    &:last-child {
      transform: translateY(48px);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md || '768px'}) {
    max-width: 440px; /* Limita a largura no celular para caber com folga nas margens */
    padding-bottom: 1.5rem;

    img {
      aspect-ratio: 3 / 4.2;

      &:first-child {
        transform: translateY(-8px);
      }

      &:last-child {
        transform: translateY(36px); /* Reduz o salto no mobile */
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || '480px'}) {
    max-width: 100%;
    padding: 0 0.5rem 1.5rem;

    
    img {
      aspect-ratio: 3 / 4.2;

      &:first-child {
        transform: translateY(-4px);
      }

      &:last-child {
        transform: translateY(28px); 
      }
    }
  }
  
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  max-width: 540px;

  .subtitle {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 600;
    letter-spacing: 0.2em;
    color: ${({ theme }) => theme.colors.textMuted};
    text-transform: uppercase;
  }

  h2 {
    position: relative; /* Referência para o bloco dourado */
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: clamp(2rem, 3.2vw, 3rem);
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: 0.04em;
    z-index: 1;

    /* O bloco decorativo dourado */
    &::before {
      content: '';
      position: absolute;
      /* Posicionamento no canto superior esquerdo */
      left: -1.5rem;

      /* Largura cobrindo OUR e altura pegando o topo de MAKING */
      width: clamp(75px, 5vw, 10px);
      height: clamp(62px, 6vw, 90px);

      background-color: ${({ theme }) => theme.colors.primary};
      z-index: -1; /* Garante que fique atrás das letras */
      pointer-events: none;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  button {
    margin-top: 0.5rem;
    padding: 0.9rem 2.2rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.surface};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    letter-spacing: 0.12em;
    transition: opacity 0.2s ease, transform 0.1s ease;

    &:hover {
      opacity: 0.85;
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;