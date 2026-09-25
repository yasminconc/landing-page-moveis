import styled, { css } from 'styled-components';
import wavesBg from '../../assets/wave-bg.svg';

export const ShowcaseSection = styled.section`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  background-image: url(${wavesBg});
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  /* Respiro generoso de padding */
  padding-bottom: 6rem;

  @media (max-width: 1024px) {
    padding-bottom: 5.5rem; /* Espaço para o menu inferior não cobrir conteúdo */
  }
`;

/* ================= 1. BARRA DE NAVEGAÇÃO DESKTOP ================= */
export const DesktopCategoryBar = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: ${({ theme }) => theme.colors.surface || '#EFEAE2'};
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const CategoryTab = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 1.8rem 1rem;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary || '#B39168' : 'transparent'};
  color: ${({ $isActive, theme }) =>
    $isActive ? '#FFFFFF' : theme.colors.text || '#2A2A2A'};
  cursor: pointer;
  transition: all 0.25s ease;
  border-right: 1px solid ${({ theme }) => theme.colors.border || 'rgba(0,0,0,0.08)'};

  

 img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    transition: filter 0.2s ease;

    /* Quando selecionado: fica branco */
    ${({ $isActive }) =>
      $isActive
        ? `filter: brightness(0) invert(1);`
        : `filter: none;`}

    /* Correção específica para o ícone de dining quando NÃO selecionado:
       se ele for branco/claro por padrão, transformamos em preto (#2A2A2A) */
    ${({ $isActive, $isDining }) =>
      !$isActive &&
      $isDining &&
      `filter: brightness(0);`}
  }

  span {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  &:hover {
    ${({ $isActive }) =>
      !$isActive &&
      css`
        background-color: rgba(0, 0, 0, 0.03);
      `}
  }
`;

/* ================= 2. DESKTOP WRAPPER (ESCALA CONTROLADA) ================= */
export const DesktopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 5rem 2rem 0; /* Padding-top de 80px para afastar do header */

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1040px; /* Mantém compacto e elegante sem esticar */
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(2.5rem, 4vw, 4rem);
  align-items: flex-start;
`;

export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.25rem;
`;

export const MainImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 380px;
  aspect-ratio: 4 / 4.8;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.35s ease;
  }
`;

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ArrowButton = styled.button`
  width: 40px;
  height: 40px;
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
    background-color: ${({ theme }) => theme.colors.dark || '#1E1E1E'};
    color: #FFFFFF;
    border-color: ${({ theme }) => theme.colors.dark || '#1E1E1E'};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  max-width: 480px;
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  

  .subtitle {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    color: ${({ theme }) => theme.colors.primary || '#B39168'};
    text-transform: uppercase;
  }

  .title-row {
    h2 {
      font-size: 1.85rem;
      letter-spacing: 0.04em;
      color: ${({ theme }) => theme.colors.text};
      line-height: 1.2;
      font-family: ${({ theme }) => theme.fonts.body};
    }
  }
`;

export const DetailImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9; /* Formato panorâmico para detalhe */
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SpecsCard = styled.div`
  width: 100%;
  padding: 1.5rem 1.8rem;
  background-color: ${({ theme }) => theme.colors.dark || '#1C1C1C'};
  background-image: url(${wavesBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: soft-light;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
  
  

  .specs-tag {
    display: block;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    color: ${({ theme }) => theme.colors.primary || '#B39168'};
    margin-bottom: 0.75rem;
  }

  .description {
    font-size: 0.8rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 0.8rem;
  }

  .specs-list {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;

    p {
      font-size: 0.75rem;
      line-height: 1.4;
      color: rgba(255, 255, 255, 0.75);
      

      strong {
        color: rgba(255, 255, 255, 0.95);
        font-weight: 600;
      }
    }
  }

  .client-footer {
    display: block;
    margin-top: 1rem;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.colors.primary || '#B39168'};
    text-transform: uppercase;
  }
`;

/* ================= 3. MOBILE CAROUSEL ================= */
export const MobileWrapper = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.5rem;
    padding-top: 2rem;
  }
`;

export const MobileHeader = styled.div`
  width: 100%;
  padding: 1.5rem 1.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;

  .subtitle {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    color: ${({ theme }) => theme.colors.primary || '#B39168'};
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.6rem;
    letter-spacing: 0.04em;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.text || '#2A2A2A'};
  }
`;

export const MobileBackButton = styled.button`
  align-self: flex-start;
  margin-bottom: 0.8rem; /* Espaço para não encostar em PROJECT DETAILS */
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: #FFFFFF;
  color: ${({ theme }) => theme.colors.text || '#2A2A2A'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: transform 0.15s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &:active {
    transform: scale(0.92);
  }
`;

export const MobileSliderArea = styled.div`
  position: relative;
  width: 100%;
`;

export const MobileFloatingBtn = styled.button`
  position: absolute;
  top: 36%;
  ${({ direction }) => (direction === 'left' ? 'left: 0.85rem;' : 'right: 0.85rem;')}
  transform: translateY(-50%);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: #FFFFFF;
  color: #1E1E1E;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  z-index: 20;
`;

export const MobileTrack = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1.25rem;
  padding: 1rem 1.5rem 2rem;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MobileSlide = styled.div`
  flex: 0 0 80vw;
  max-width: 340px;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.4s ease, opacity 0.4s ease;
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
  border-radius: 12px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MobileCard = styled(SpecsCard)`
  margin-top: -3.8rem;
  width: 90%;
  z-index: 10;
  padding: 1.4rem 1.3rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.dark || '#1C1C1C'};

  /* Título da categoria/projeto */
  .specs-tag {
    color: ${({ theme }) => theme.colors.primary || '#C8A97E'};
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    display: block;
    margin-bottom: 0.6rem;
  }

  /* Descrição do projeto */
  p {
    color: rgba(255, 255, 255, 0.88);
    font-size: 0.8rem;
    line-height: 1.55;
    margin: 0;
  }

  /* Bloco de detalhes técnicos (Wood, Finish, etc.) */
  .mobile-specs {
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(255, 255, 255, 0.12);

    span {
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.4;
      display: block;

      strong {
        color: #FFFFFF;
        font-weight: 600;
      }
    }
  }
`;

export const DesktopTopBarWrapper = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%); /* Centraliza verticalmente com a altura exata da barra */
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: #FFFFFF;
  color: ${({ theme }) => theme.colors.text || '#2A2A2A'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 20;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.2s ease;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark || '#1E1E1E'};
    color: #FFFFFF;
    border-color: ${({ theme }) => theme.colors.dark || '#1E1E1E'};

    svg {
      transform: translateX(-2px);
    }
  }

  &:active {
    transform: translateY(-50%) scale(0.92);
  }
`;



/* ================= 4. MOBILE BOTTOM NAV (Fixa ou Docked na Base) ================= */
export const MobileBottomNav = styled.nav`
  display: none;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.surface || '#F5F0EB'};
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.06);
    z-index: 100;
  }
`;

export const MobileNavTab = styled.button`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  padding: 0.75rem 0.25rem 0.85rem;
  border: none;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary || '#B39168' : 'transparent'};
  cursor: pointer;
  transition: all 0.2s ease;

  img {
    width: 22px;
    height: 22px;
    object-fit: contain;
    transition: filter 0.2s ease;

    /* Quando a aba estiver ativa: vira branco */
    filter: ${({ $isActive }) => ($isActive ? 'brightness(0) invert(1)' : 'none')};

    /* Se NÃO estiver ativo e for o ícone de dining (que é claro por padrão), força preto */
    ${({ $isActive, $isDining }) =>
      !$isActive &&
      $isDining &&
      `filter: brightness(0);`}
  }

  span {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: ${({ $isActive, theme }) =>
      $isActive ? '#FFFFFF' : theme.colors.text || '#2A2A2A'};
    white-space: nowrap;
  }
`;