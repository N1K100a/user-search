import { createGlobalStyle } from "styled-components";
import { device } from "../deviceSizes/deviceSizes";

export const GlobalStyles = createGlobalStyle<{ theme: any }>`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Space Mono', monospace;
    box-sizing: border-box;
  } 

  #root {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.siteColor};
    

  }

  .App {
    width: 100%;
    max-width: 730px;
    box-sizing: content-box;
    
  }

  @media ${device.tablet} {
    .App {
    max-width: 573px;
    padding: 24px;
  }
  }
`;
