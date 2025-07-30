import { createGlobalStyle } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    margin: 0;        
    padding: 0;
    font-family: 'Barlow Semi Condensed', sans-serif;
    background-color: #000;
  }
html, body, #root {
  height: 100%;
}
  
`;

export default GlobalStyles;
