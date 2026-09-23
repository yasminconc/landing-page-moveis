import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

/* 1. Barra superior escura */
export const BenefitsBar = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary || '#1E1E1E'};
  padding: 2.2rem 2rem;
  display: flex;
  justify-content: center;
`;

export const BenefitsContent = styled.div`
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md || '768px'}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const BenefitItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    h4 {
      font-family: ${({ theme }) => theme.fonts.body};
      font-size: 0.95rem;
      letter-spacing: 0.08em;
      color: ${({ theme }) => theme.colors.surface};
    }

    p {
      font-family: ${({ theme }) => theme.fonts.body};
      font-size: 0.8rem;
      color: rgba(255, 255, 255, 0.65);
      line-height: 1.4;
    }
  }
`;

/* 2. Área principal Why Choose Us */
export const MainSection = styled.div`
  width: 100%;
  padding: 10rem 2rem;
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md || '768px'}) {
    padding: 4rem 1.5rem;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 8rem;

  /* Reduz a distância vertical entre o topo e o 230+ no mobile */
  @media (max-width: ${({ theme }) => theme.breakpoints.lg || '1024px'}) {
    gap: 3rem; /* Diminui de 8rem para 3rem */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || '480px'}) {
    gap: 5rem; /* Ajuste fino para telas menores de celular */
  }
`;

/* Cabeçalho com alinhamento perfeito de topo */
export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: clamp(2rem, 5vw, 6rem);
  /* Alinha os blocos pelo topo */
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg || '1024px'}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .subtitle {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 600;
    letter-spacing: 0.2em;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
  }

  .title-with-bar {
    display: flex;
    align-items: stretch;
    gap: 1.5rem;

    /* Barra vertical com altura que acompanha perfeitamente as 3 linhas do H2 */
    &::before {
      content: '';
      width: 4px;
      background-color: ${({ theme }) => theme.colors.primary};
      flex-shrink: 0;
    }

    h2 {
      font-family: ${({ theme }) => theme.fonts.body};
      font-size: clamp(2rem, 3vw, 2.75rem);
      line-height: 1.15;
      color: ${({ theme }) => theme.colors.text};
      letter-spacing: 0.04em;
    }
  }
`;

export const DescriptionText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(0.85rem, 1vw, 0.95rem);
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textMuted};
  /* Compensa a altura do .subtitle para alinhar com a primeira linha do H2 */
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg || '1024px'}) {
    margin-top: 0;
  }
`;

/* Grid inferior: Alinhamento pelo topo para o 230+ casar com os cards */
export const BottomRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.1fr;
  gap: clamp(2rem, 6vw, 6rem);
  /* Alinha o 230+ exatamente com a primeira linha de cards */
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg || '1024px'}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;
export const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;

  .number-wrap {
    display: inline-flex;
    align-items: center;

    span {
      position: relative; /* O contexto de posição agora fica direto no número */
      z-index: 1;
      font-family: ${({ theme }) => theme.fonts.body};
      font-size: clamp(3.75rem, 5.5vw, 5.25rem);
      font-weight: 700;
      color: ${({ theme }) => theme.colors.text};
      line-height: 1;
      letter-spacing: 0.02em;

      /* Quadrado proporcional exato cobrindo o '2' e metade do '3' */
      &::before {
        content: '';
        position: absolute;
        /* Sobe um pouco além do topo do número como no Figma */
        top: -0.15em;
        left: -0.18em;

        /* Largura cobrindo o 2 e metade do 3 (1.2em da fonte do número) */
        width: 1em;
        /* Altura descendo até a parte média dos dígitos */
        height: 1.1em;

        background-color: ${({ theme }) => theme.colors.primary};
        z-index: -1;
      }
    }
    
  }

  p {
    margin-top: 1.25rem;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.35;
    color: ${({ theme }) => theme.colors.text};
    max-width: 170px;
  }


  @media (max-width: ${({ theme }) => theme.breakpoints.lg || '1024px'}) {
    flex-direction: row;
    align-items: center;
    gap: 1.75rem;
    margin-left: 0.8rem;
    

    p {
      margin-top: 0;
      font-size: 1rem;
      max-width: 140px; /* Mantém 'Bespoke order' em cima e 'production' embaixo */
    }

  }

`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.5rem 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm || '480px'}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    margin-top: 1rem;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;

  .icon-box {
    position: relative;
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    /* Quadrado dourado no lado direito atrás do ícone */
    &::before {
      content: '';
      position: absolute;
      width: 56px;
      height: 58px;
      top: -0.8em;
      right: -0.8em;
      background-color: ${({ theme }) => theme.colors.primary};
      opacity: 0.9;
      z-index: 0;
    }

    img {
      position: relative;
      z-index: 1;
      width: 60px;
      height: 60px;
      object-fit: contain;
    }
  }

  .text-box {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    padding-left: 1rem;

    h3 {
      font-family: ${({ theme }) => theme.fonts.body};
      font-size: 1.2rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
      line-height: 1.2;
      letter-spacing: 0.02em;
      /* Mantém maiúsculas/minúsculas sem forçar uppercase */
      text-transform: none;
    }

    p {
      font-family: ${({ theme }) => theme.fonts.body};
      font-size: 0.85rem;
      line-height: 1.6;
      color: ${({ theme }) => theme.colors.textMuted};
    }
  }
`;