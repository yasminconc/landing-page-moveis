import styled from 'styled-components';

export const RoomsContainer = styled.nav`
  width: 100%;
  display: grid;
  /* 4 colunas proporcionais preenchendo 100% da tela */
  grid-template-columns: repeat(4, 1fr);
  background-color: ${({ theme }) => theme.colors.backgroundAlt || theme.colors.background};

  /* No tablet e celular, transforma em 2 colunas x 2 linhas */
  @media (max-width: ${({ theme }) => theme.breakpoints.md || '768px'}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const RoomCard = styled.button`
  /* Reset do botão */
  background: none;
  border: none;
  cursor: pointer;

  width: 100%;
  /* Altura fluida: varia confortavelmente entre 8rem e 13rem */
  min-height: clamp(7.5rem, 12vw, 13rem);
  padding: 1.5rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  /* Divisórias sutis entre os blocos */
  border-right: 1px solid ${({ theme }) => theme.colors.border || 'rgba(0,0,0,0.08)'};

  /* Cores dinâmicas baseadas na prop $isActive */
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : 'transparent'};

  transition: background-color 0.25s ease, transform 0.15s ease;

  img {
    /* Diminui e aumenta suavemente conforme a tela */
    width: clamp(2rem, 3.2vw, 3.25rem);
    height: auto;
    object-fit: contain;
    /* Se estiver ativo, deixa o ícone branco caso seja monocromático */
    filter: ${({ $isActive }) => ($isActive ? 'brightness(0) invert(1)' : 'none')};
  }

  p {
    font-size: clamp(0.75rem, 1vw, 0.95rem);
    font-weight: 700;
    letter-spacing: 0.1em;
    white-space: nowrap;
    color: ${({ $isActive, theme }) =>
      $isActive ? theme.colors.surface : theme.colors.text};
  }

  &:hover {
    background-color: ${({ $isActive, theme }) =>
      $isActive ? theme.colors.primaryDark : 'rgba(0, 0, 0, 0.04)'};
  }

  /* Remove borda direita do último item no desktop */
  &:last-child {
    border-right: none;
  }

  /* Ajustes para o grid 2x2 no mobile */
  @media (max-width: ${({ theme }) => theme.breakpoints.md || '768px'}) {
    &:nth-child(2n) {
      border-right: none; /* Tira borda da 2ª coluna */
    }
    &:nth-child(-n + 2) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.border || 'rgba(0,0,0,0.08)'}; /* Borda inferior na 1ª linha */
    }
  }
`;