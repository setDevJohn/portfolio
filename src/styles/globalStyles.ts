import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    color: ${({ theme }) => theme.textColor};
  }

  body {
    background-color: ${({ theme }) => theme.mainColor};
  }

  html {
    font-size: 62.5%;
  }

  img {
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

export { GlobalStyle };