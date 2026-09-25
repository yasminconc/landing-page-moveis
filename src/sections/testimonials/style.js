import styled, { css } from 'styled-components';
import wavesBg from '../../assets/wave-bg.svg';

export const TestimonialsSection = styled.section`
  position: relative;
  width: 100%;
  padding: 6rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  background-image: url(${wavesBg});
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md || '768px'}) {
    padding: 4rem 0 3rem; /* padding 0 nas laterais igual Products para a esteira vazar suave */
    background-size: 220% auto;
    background-position: top center;
  }
`;

/* ================= DESKTOP ================= */
export const DesktopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg || '1024px'}) {
    display: none;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1080px; 
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: flex-start;
`;

export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.5rem;
`;

export const MainImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 390px;
  aspect-ratio: 4 / 4.7;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
`;

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

export const ArrowButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.surface};
    border-color: ${({ theme }) => theme.colors.dark};
  }

  &:active {
    transform: scale(0.94);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 460px;
`;

export const HeaderBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;

  .subtitle {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 600;
    letter-spacing: 0.22em;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
  }

  .title-row {
    position: relative;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      position: absolute;
      right: 100%;
      margin-right: 1.5rem;
      width: 180px;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.primary};
    }

    h2 {
      font-family: ${({ theme }) => theme.fonts.body};
      font-size: clamp(1.5rem, 2.3vw, 2.25rem);
      letter-spacing: 0.05em;
      color: ${({ theme }) => theme.colors.text};
      line-height: 1.2;
    }
  }
`;

export const SecondaryImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 11;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 75%;
    transition: opacity 0.3s ease;
  }
`;

export const TestimonialCard = styled.div`
  position: relative;
  width: 100%;
  padding: 1.6rem 1.8rem;
  background-color: ${({ theme }) => theme.colors.dark || '#1E1E1E'};
  background-image: url(${wavesBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: soft-light;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);

  .quote-mark {
    font-family: Georgia, serif;
    font-size: 2.8rem;
    line-height: 1;
    color: rgba(255, 255, 255, 0.2);
    display: block;
    margin-bottom: -0.75rem;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.8rem;
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.85);
  }

  .author {
    display: block;
    margin-top: 1rem;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
  }
`;

/* ================= MOBILE (Figma Frame 578) ================= */
export const MobileWrapper = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg || '1024px'}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    gap: 1.5rem;
  }
`;

export const MobileHeader = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;

  .subtitle {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 600;
    letter-spacing: 0.2em;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1.6rem;
    letter-spacing: 0.04em;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const MobileSliderArea = styled.div`
  position: relative;
  width: 100%;
`;

/* Setas flutuantes sobre a imagem */
export const MobileFloatingBtn = styled.button`
  position: absolute;
  top: 36%;
  ${({ direction }) => (direction === 'left' ? 'left: 0.85rem;' : 'right: 0.85rem;')}
  transform: translateY(-50%);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: ${({ theme }) => theme.colors.surface || '#FFFFFF'};
  color: ${({ theme }) => theme.colors.dark || '#1E1E1E'};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  z-index: 20;
  transition: transform 0.15s ease;

  &:active {
    transform: translateY(-50%) scale(0.92);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

/* Esteira contínua idêntica à de Products: sem scroll-snap conflitante */
export const MobileTrack = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory; /* NOVO */
  gap: 1.25rem;
  padding: 1rem 1.5rem 2rem;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;


/* Slide individual com largura em vw (80vw) e transição de escala suave */
export const MobileSlide = styled.div`
  flex: 0 0 80vw;
  max-width: 360px;
  scroll-snap-align: center; /* NOVO */
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease;
  transform: scale(0.94);
  opacity: 0.75;

  ${({ $isActive }) =>
    $isActive &&
    css`
      transform: scale(1);
      opacity: 1;
    `}
`;

export const MobileImageFrame = styled.div`
  width: 100%;
  aspect-ratio: 4 / 4.4;
  overflow: hidden;
  border-radius: 12px; /* Arredondado conforme solicitado */
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
`;

export const MobileCard = styled(TestimonialCard)`
  margin-top: -3.8rem;
  width: 90%;
  z-index: 10;
  padding: 1.4rem 1.3rem;
  border-radius: 10px; /* Bordas arredondadas do card escuro */
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.24);

  p {
    font-size: 0.8rem;
    line-height: 1.6;
  }
`;