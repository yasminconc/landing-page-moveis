import styled, { css } from 'styled-components'
import wavesBg from '../../assets/wave-bg.svg'

export const ProductsSection = styled.section`
  position: relative;
  width: 100%;
  padding: 6rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  background-image: url(${wavesBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md || '768px'}) {
    padding: 4rem 0 3rem;
    background-size: 180% auto;
  }
`;

export const ProductsContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md || '768px'}) {
    gap: 1.75rem;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  max-width: 620px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md || '768px'}) {
    padding: 0 1.5rem;
  }

  .subtitle {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 600;
    letter-spacing: 0.2em;
    color: ${({ theme }) => theme.colors.textMuted};
    text-transform: uppercase;
  }

  h2 {
    position: relative;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: clamp(1.8rem, 2.8vw, 2.75rem);
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: 0.04em;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      top: -0.2em;
      left: -0.25em;
      width: clamp(80px, 7vw, 115px);
      height: clamp(60px, 5vw, 85px);
      background-color: ${({ theme }) => theme.colors.primary};
      z-index: -1;
      pointer-events: none;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const ActionButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.9rem 2.2rem;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.surface};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: opacity 0.2s ease, transform 0.1s ease;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    transform: scale(0.98);
  }

  &.desktop-only {
    display: inline-block;
    @media (max-width: ${({ theme }) => theme.breakpoints.md || '768px'}) {
      display: none;
    }
  }

  &.mobile-only {
    display: none;
    @media (max-width: ${({ theme }) => theme.breakpoints.md || '768px'}) {
      display: inline-block;
      width: calc(100% - 3rem);
      margin: 1.5rem auto 0;
      text-align: center;
    }
  }
`;

/* Wrapper relativo para acomodar as setas e a área de rolagem */
export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const MosaicGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 280px 180px 340px;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg || '1024px'}) {
    grid-template-rows: 220px 150px 280px;
    gap: 1rem;
  }

  /* No Mobile: Transformado em esteira animada fluida */
  @media (max-width: ${({ theme }) => theme.breakpoints.md || '768px'}) {
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;
    gap: 1rem;
    padding: 1.5rem 1.5rem 2rem;
    width: 100%;
  }
`;

export const GridItem = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

  /* Posições desktop mantidas idênticas */
  &.item-kitchen {
    grid-column: 1;
    grid-row: 1 / 3;
  }

  &.item-study {
    grid-column: 1;
    grid-row: 3;
  }

  &.item-tv-top {
    grid-column: 2;
    grid-row: 1;
  }

  &.item-red-kitchen {
    grid-column: 2;
    grid-row: 2 / 4;
  }

  &.item-office-desk {
    grid-column: 3;
    grid-row: 1 / 3;
  }

  &.item-tv-bottom {
    grid-column: 3;
    grid-row: 3;
  }

  /* Estilos Mobile com efeito de salto e transição suave */
  @media (max-width: ${({ theme }) => theme.breakpoints.md || '768px'}) {
    flex: 0 0 78vw;
    height: 380px;
    border-radius: 6px;
    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1),
                box-shadow 0.6s ease,
                opacity 0.6s ease;

    /* Card comum / inativo */
    transform: scale(0.92);
    opacity: 0.7;

    /* Card Ativo no foco: Efeito de Pular da Tela */
    ${({ $isActive }) =>
      $isActive &&
      css`
        transform: scale(1.03) translateY(-4px);
        opacity: 1;
        box-shadow: 0 16px 36px rgba(0, 0, 0, 0.22);
      `}

    &.item-kitchen,
    &.item-tv-top,
    &.item-office-desk,
    &.item-study,
    &.item-red-kitchen,
    &.item-tv-bottom {
      grid-column: auto;
      grid-row: auto;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    transition: transform 0.35s ease;

    &:hover {
      transform: scale(1.03);
    }
  }
`;

/* Setas de Navegação (visíveis no mobile) */
export const ArrowButton = styled.button`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md || '768px'}) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.dark};
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    z-index: 10;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.15s ease;

    &:active {
      transform: translateY(-50%) scale(0.92);
    }

    &.prev {
      left: 0.75rem;
    }

    &.next {
      right: 0.75rem;
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;