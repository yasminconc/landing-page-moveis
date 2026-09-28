import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #faf6f0;
  color: #1a1816;
`;

export const SectionWrapper = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints?.lg || '1024px'}) {
    padding: 3.5rem 1.75rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.sm || '480px'}) {
    padding: 2.5rem 1.25rem;
  }
`;

export const InnerContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

/* ================= COMPONENTES COMPARTILHADOS ================= */

/* Barra do Topo (Tag à esquerda e Marca à direita) */
export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;

  .badge-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    font-family: ${({ theme }) => theme.fonts?.body || 'sans-serif'};
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #a38155;

    &::before {
      content: '';
      width: 22px;
      height: 8px;
      background-color: #ba9667;
      border-radius: 2px;
    }
  }

  .brand-logo {
    font-family: ${({ theme }) => theme.fonts?.body || 'sans-serif'};
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    color: #635f5c;
    text-transform: uppercase;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.sm || '480px'}) {
    margin-bottom: 2rem;
  }
`;

/* Agrupador à esquerda (Botão + Tag) */
export const HeaderLeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints?.sm || '480px'}) {
    gap: 1rem;
  }
`;

/* Botão de voltar com a mesma identidade visual da marca */
export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.5px solid #ba9667;
  background-color: transparent;
  color: #ba9667;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: all 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.2s ease;
  }

  &:hover {
    background-color: #ba9667;
    color: #ffffff;

    svg {
      transform: translateX(-3px);
    }
  }

  &:active {
    transform: scale(0.94);
  }
`;

/* Rodapé dos slides (Frase à esquerda e contador à direita) */
export const SectionFooterIndicator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 3.5rem;
  padding-top: 1.25rem;

  .tagline {
    font-family: ${({ theme }) => theme.fonts?.body || 'sans-serif'};
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #9c958d;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.sm || '480px'}) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    margin-top: 2.5rem;
  }
`;

/* ================= 01/02: NOSSA TRAJETÓRIA ================= */
export const TrajectorySection = styled(SectionWrapper)`
  background-color: #faf6f0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

export const TrajectoryGrid = styled.div`
  display: grid;
  /* Dá mais espaço para a coluna de texto respirar sem espremer o título */
  grid-template-columns: 0.85fr 1.15fr;
  gap: 4.5rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints?.lg || '1024px'}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const TrajectoryImageWrapper = styled.div`
  width: 100%;
  height: 460px;
  border-radius: 26px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.lg || '1024px'}) {
    height: 380px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.sm || '480px'}) {
    height: 260px;
    border-radius: 18px;
  }
`;

export const TrajectoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 620px;

  h1, h2 {
    /* Fonte sans-serif geométrica idêntica à referência */
    font-family: ${({ theme }) => theme.fonts?.body || "'Inter', 'Helvetica Neue', Arial, sans-serif"};
    font-size: clamp(2rem, 3.2vw, 3.1rem);
    font-weight: 800;
    line-height: 1.15;
    color: #231f1d;
    text-transform: none;
    letter-spacing: -0.03em;
    margin: 0 0 1.5rem 0;
    word-break: normal;

    @media (max-width: ${({ theme }) => theme.breakpoints?.sm || '480px'}) {
      font-size: 1.85rem;
      margin-bottom: 1rem;
    }
  }

  .description {
    font-family: ${({ theme }) => theme.fonts?.body || 'sans-serif'};
    font-size: 1.05rem;
    line-height: 1.6;
    color: #635f5c;
    margin-bottom: 2.5rem;
    max-width: 560px;

    @media (max-width: ${({ theme }) => theme.breakpoints?.sm || '480px'}) {
      font-size: 0.95rem;
      margin-bottom: 1.75rem;
    }
  }

  .stats-row {
    display: flex;
    align-items: center;
    gap: 2.5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints?.sm || '480px'}) {
      gap: 1.75rem;
    }
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;

    .stat-number {
      font-family: ${({ theme }) => theme.fonts?.body || 'sans-serif'};
      font-size: 2.4rem;
      font-weight: 800;
      color: ${({ theme }) => theme.colors?.primary || '#b8905b'};
      line-height: 1;

      @media (max-width: ${({ theme }) => theme.breakpoints?.sm || '480px'}) {
        font-size: 1.85rem;
      }
    }

    .stat-label {
      font-family: ${({ theme }) => theme.fonts?.body || 'sans-serif'};
      font-size: 0.85rem;
      font-weight: 600;
      color: #6d6660;
    }
  }

  .stat-divider {
    width: 1px;
    height: 48px;
    background-color: rgba(0, 0, 0, 0.14);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.lg || '1024px'}) {
    max-width: 100%;
  }
`;

/* ================= 02/02: DIFERENCIAIS WOOLAND ================= */
export const DifferentialsSection = styled(SectionWrapper)`
  background-color: #faf6f0;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
`;

export const DifferentialsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin-bottom: 3.5rem;
  max-width: 650px;

  h2 {
    font-family: ${({ theme }) => theme.fonts?.body || "'Inter', 'Helvetica Neue', Arial, sans-serif"};
    font-size: clamp(2rem, 3vw, 3rem);
    line-height: 1.15;
    font-weight: 800;
    color: #231f1d;
    letter-spacing: -0.03em;
    margin: 0 0 1.25rem 0;

    @media (max-width: ${({ theme }) => theme.breakpoints?.sm || '480px'}) {
      font-size: 1.85rem;
      margin-bottom: 0.85rem;
    }
  }

  .description {
    font-family: ${({ theme }) => theme.fonts?.body || 'sans-serif'};
    font-size: 1rem;
    line-height: 1.6;
    color: #635f5c;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints?.sm || '480px'}) {
      font-size: 0.9rem;
    }
  }
`;

export const DifferentialsCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints?.lg || '1024px'}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const DifferentialCard = styled.div`
  background-color: #ede4d6; /* Fundo bege fosco do card original */
  padding: 2.25rem 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  .card-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background-color: #b8905b; /* Fundo sólido dourado/madeira */
    color: #ffffff; /* Ícone branco */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.75rem;

    svg {
      width: 22px;
      height: 22px;
    }
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts?.body || "'Inter', 'Helvetica Neue', Arial, sans-serif"};
    font-size: 1.2rem;
    font-weight: 700;
    color: #231f1d;
    letter-spacing: -0.01em;
    margin: 0 0 0.85rem 0;
  }

  p {
    font-family: ${({ theme }) => theme.fonts?.body || 'sans-serif'};
    font-size: 0.9rem;
    line-height: 1.65;
    color: #635f5c;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.sm || '480px'}) {
    padding: 1.85rem 1.5rem;
  }
`;