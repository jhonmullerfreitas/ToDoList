import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }

  :root{
    --white: #ffffff;
    --gradientBackground: linear-gradient(180deg, #303C73 46.87%, rgba(74 86 145 / 88%) 99.96%, rgba(48, 60, 115, 0.431818) 99.97%, rgba(48, 60, 115, 0.431818) 99.98%, #303C73 99.99%, rgba(48, 60, 115, 0) 100%);
    --boxShadowHeader: drop-shadow(0px 4px 4px rgba(48, 60, 115, 0.5));
    --blue: #303C73;
    --blue-2: #505c94;
    --blue-card: #4f5b92;
    --blue-detail-list: #BAC1E4;
    --colorHover: #a29696;
  }
`;
