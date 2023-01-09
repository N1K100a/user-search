import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ theme: any }>`
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
    background-color: ${({ theme }) => theme.boxColor};
    

  }

  .App {
    width: 730px;
  }

`;
