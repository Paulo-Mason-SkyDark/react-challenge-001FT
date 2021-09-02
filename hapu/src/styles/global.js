import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  *  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body, input, textarea, button {
    color: black;
    -webkit-font-smoothing: antialiased;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: #F2F2F2;
  }

`;