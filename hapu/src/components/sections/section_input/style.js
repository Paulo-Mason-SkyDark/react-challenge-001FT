import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 80px;
`;


export const TitleSection = styled.h3`

    padding: 40px 0px 40px 0px;
    color: #3D3D3D;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 32px;
    

`;

export const Paragraph = styled.p`

font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 28px;
text-align: center;
color: #3D3D3D;
width: 65%;
    

`;


export const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
  &:active,
  &:focus {
    text-align: left;
  }
`