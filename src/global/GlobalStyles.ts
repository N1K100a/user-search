import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Space Mono', monospace;
    box-sizing: border-box;
  } 

  #root {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #141D2F;
  }

  .App {
    width: 730px;
  }

`;
