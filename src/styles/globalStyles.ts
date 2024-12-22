import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.primaryFont};
    color: ${({ theme }) => theme.textColor};
  }

  body {
    background-color: ${({ theme }) => theme.mainColor};
  }

  html {
    font-size: 50%;
    font-weight: 400;
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

  button {
    border: none;
  }
`;

export { GlobalStyle };