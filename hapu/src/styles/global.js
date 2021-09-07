import { createGlobalStyle } from "styled-components";
import {device} from '../config/config_css_query/media_query_breakpoints';


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

  hr {
    width: 60%;
    border: 1px solid #DFDFDF;

    @media ${device.mobileM}{
      width: 90%;
    }
  }

`;