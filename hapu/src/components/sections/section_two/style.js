import styled from "styled-components";



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
    

`;

export const Paragraph = styled.p`

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #3D3D3D;
  width: 65%;

  
  
    

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