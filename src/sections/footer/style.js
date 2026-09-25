import styled from 'styled-components';
import wavesBg from '../../assets/white-wave.svg';

/* ================= FOOTER PRINCIPAL ================= */

export const FooterSection = styled.footer`
  width: 100%;
  height: 20rem;
  background-color: ${({ theme }) =>
    theme.colors.secondary || '#23201d'};
  color: ${({ theme }) =>
    theme.colors.surface || '#ffffff'};
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg || '1024px'}) {
    height: auto;
  }
`;

/* ================= GRID PRINCIPAL ================= */

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 1.85fr 1fr;
  height: 100%;
  min-height: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg || '1024px'}) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

/* ================= 1. COLUNA ESQUERDA ================= */

export const BrandCol = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary};
  background-image: url(${wavesBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: soft-light;

  padding: 0 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-right: 1px solid rgba(255, 255, 255, 0.08);
  min-height: 0;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg || '1024px'}) {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 0 1.5rem 1.5rem;
    text-align: center;
    gap: 1rem;
  }
`;

/* ================= FLÂMULA / LOGO ================= */

export const BrandBadge = styled.div`
  width: 100px;
  background-color: #ffffff;
  padding: 0.8rem 0.6rem 1.3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  clip-path: polygon(
    0 0,
    100% 0,
    100% 82%,
    50% 100%,
    0 82%
  );

  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.35);

  svg {
    width: 28px;
    height: 28px;
    color: #1a1816;
  }

  .brand-name {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: ${({ theme }) =>
      theme.colors.primary || '#ba9667'};
    text-align: center;
    line-height: 1.1;
  }

  .brand-sub {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.4rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    color: #555555;
    text-transform: uppercase;
  }
`;

/* ================= TEXTO E COPYRIGHT ================= */

export const BrandContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 100%;
  max-width: 320px;

  p {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.7rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
  }

  .divider-line {
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.12);
  }

  .copyright {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.6rem;
    color: rgba(255, 255, 255, 0.45);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg || '1024px'}) {
    align-items: center;
    max-width: 100%;

    p {
      max-width: 100%;
    }
  }
`;

/* ================= 2. COLUNA CENTRAL ================= */

export const MainCol = styled.div`
  padding: 1.5rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  min-height: 0;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg || '1024px'}) {
    padding: 2rem 1.5rem;
    gap: 2rem;
  }
`;

/* ================= NEWSLETTER ================= */

export const NewsletterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 580px;

  h3 {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.9rem;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 0.02em;
    margin: 0;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.7rem;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
  }

  form {
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    margin-top: 0.3rem;
    width: 100%;
  }

  input {
    flex: 1;
    min-width: 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.35);

    padding: 0.35rem 0.2rem;
    color: #ffffff;

    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.75rem;
    outline: none;

    transition: border-color 0.2s ease;

    &::placeholder {
      font-style: italic;
      color: rgba(255, 255, 255, 0.4);
    }

    &:focus {
      border-bottom-color: ${({ theme }) =>
        theme.colors.primary || '#ba9667'};
    }
  }

  button {
    padding: 0.65rem 1.5rem;

    background-color: ${({ theme }) =>
      theme.colors.primary || '#ba9667'};

    color: #ffffff;
    border: none;

    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.12em;

    cursor: pointer;
    transition: opacity 0.2s ease, transform 0.1s ease;
    white-space: nowrap;

    &:hover {
      opacity: 0.9;
    }

    &:active {
      transform: scale(0.98);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || '480px'}) {
    form {
      flex-direction: column;
      align-items: stretch;
      gap: 0.8rem;
    }
  }
`;

/* ================= LINKS E CONTATOS ================= */

export const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.1fr 1.4fr;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md || '768px'}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  h4 {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #ffffff;
    text-transform: uppercase;
    margin: 0;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    padding: 0;
    margin: 0;
  }

  a {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.65rem;
    color: rgba(255, 255, 255, 0.65);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) =>
        theme.colors.primary || '#ba9667'};
    }
  }

  /* ================= CONTATOS ================= */

  .contact-item {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.65rem;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.65);

    strong {
      color: ${({ theme }) =>
        theme.colors.primary || '#ba9667'};
      font-weight: 700;
      margin-right: 0.2rem;
    }
  }
`;

/* ================= 3. COLUNA DIREITA: MAPA ================= */

export const MapCol = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  background-color: #d8cbb8;

  img.map-bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: sepia(0.2) contrast(1.05);
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg || '1024px'}) {
    height: 180px;
  }
`;

/* ================= PIN DO MAPA ================= */

export const MapPin = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 36px;
  height: 36px;

  transform: translate(-50%, -50%) rotate(-45deg);

  background-color: #ffffff;
  border-radius: 50% 50% 50% 0;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    width: 12px;
    height: 12px;

    background-color: ${({ theme }) =>
      theme.colors.primary || '#ba9667'};

    border-radius: 50%;
    transform: rotate(45deg);
  }
`;