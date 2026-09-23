import styled from 'styled-components';

export const RequestSection = styled.section`
  width: 100%;
  padding: 6rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px groove ${({ theme }) => theme.colors.textLight};
`;

export const RequestContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  align-items: center;
  gap: clamp(2rem, 5vw, 6rem);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg || '1024px'}) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  max-width: 520px;

  .subtitle {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 600;
    letter-spacing: 0.2em;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
  }

  h2 {
    position: relative;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: clamp(1.55rem, 5.5vw, 2.75rem);
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: 0.04em;
    z-index: 1;

    /* Bloco dourado decorativo atrás de CREATE / UNIQUE */
    &::before {
      content: '';
      position: absolute;
      top: -0.22em;
      left: -0.50em;
      width: clamp(75px, 4vw, 100px);
      height: clamp(65px, 5.5vw, 85px);
      background-color: ${({ theme }) => theme.colors.primary};
      z-index: -1;
      pointer-events: none;
    }
  }

  .accent-line {
    width: 48px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  button {
    margin-top: 0.5rem;
    padding: 0.9rem 2.4rem;
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.surface};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    letter-spacing: 0.12em;
    cursor: pointer;
    border: none;
    transition: opacity 0.2s ease, transform 0.1s ease;

    &:hover {
      opacity: 0.85;
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

export const ImagesComposition = styled.div`
  position: relative;
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  img {
    object-fit: cover;
    display: block;
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);

    /* Imagem superior: encostada na direita */
    &:first-child {
      width: 82%;
      align-self: flex-end;
      object-position: 80% center;
    }

    /* Imagem inferior: com folga e foco ajustado para não cortar o dedo */
    &:last-child {
      width: 82%;
      align-self: flex-start;
      /* Dá um leve respiro da borda esquerda para mostrar o final da madeira e o dedo */
      margin-left: 2rem;
      /* Centraliza ligeiramente o recorte para revelar a lateral direita da foto */
      
    }

    
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md || '768px'}) {
      display: none; /* Oculta a composição cortada no mobile */
    }
`;

/* Imagem Única: OCULTA NO DESKTOP / ATIVA NO MOBILE */
export const MobileImageWrapper = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md || '768px'}) {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 0.5rem;

    img {
      width: 100%;
      max-width: 380px;
      aspect-ratio: 4 / 4.6;
      object-fit: cover;
      object-position: center;
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
      display: block;
      border-radius: 8px;
    }
  }
`;
2.