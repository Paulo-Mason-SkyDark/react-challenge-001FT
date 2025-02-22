import styled from "styled-components";
import {device} from '../../../config/config_css_query/media_query_breakpoints';



export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 80px;

    > div form input[type="text"],
    div form input[type="email"] {
      &:focus { 
        border: 3px solid #000;
      }

      background: #FFFFFF;
      border: 1px solid #DFDFDF;
      box-sizing: border-box;
      border-radius: 4px;

      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px; 
      color: #3D3D3D;

      width: 232px;
      height: 48px;


      cursor: text;
      margin: 74px 12px 64px  0px;
      padding-left: 20px;
      &:active,
      &:focus {
        text-align: left;
      }
  }


    div form input[type="submit"] {
    &:hover{
      background: #008256f2;
    }

    background: #00A870;
    border-radius: 4px;
    border-style: none;
    width: 96px;
    height: 48px;

    //styles text
    color: #fff;  
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }


  
  div form .circle{
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media(max-width: 900px) {

    div {
      width: 90%;

      form input {
        display: block;
        
      }
      
    }
    
    > div form input[type="text"],
    div form input[type="email"] {
      width: 100%;
      margin: 24px 0;
    }

    > div form input[type="submit"] {
      width: 100%;
    }
  }
`;

export const Divider = styled.hr`
    width: 60%;
`;

// export const ButtonSend = styled.button`

//     &:hover{
//       background: #008256f2;
//     }

//     background: #00A870;
//     border-radius: 4px;
//     border-style: none;
//     width: 96px;
//     height: 48px;

//     //styles text
//     color: #fff;  
//     font-weight: 500;
//     font-size: 14px;
//     line-height: 20px;
// desenvolvido por Paulo Daniel de Araújo - SkyDark - Mason
// `;



export const TitleSection = styled.h3`

    padding: 64px 0px 40px  0px;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #3D3D3D;

    @media ${device.mobileM} {
      padding-bottom: 16px;
      width: 328px;
    }
    

`;

export const Paragraph = styled.p`

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #3D3D3D;
  width: 65%;

  @media ${device.mobileM}{

    font-size: 16px;
    line-height: 28px;
    width: 328px;


  }

  
  
    

`;


// export const Input = styled.input`

//   &:hover { 
//     background: #ddd;
//   }

//   background: #FFFFFF;
//   border: 1px solid #DFDFDF;
//   box-sizing: border-box;
//   border-radius: 4px;

//   font-style: normal;
//   font-weight: normal;
//   font-size: 14px;
//   line-height: 20px; 
//   color: #3D3D3D;

//   width: 232px;
//   height: 48px;


//   cursor: text;
//   margin: 74px 12px 64px  0px;
//   padding-left: 20px;
//   &:active,
//   &:focus {
//     text-align: left;
//   }
// `
// desenvolvido por Paulo Daniel de Araújo - SkyDark - Mason