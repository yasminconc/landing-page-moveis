import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.body};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.title};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.body};
    cursor: pointer;
    border: none;
    outline: none;
    text-transform: uppercase;
    font-weight: 600;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;