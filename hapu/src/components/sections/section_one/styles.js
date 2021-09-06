import styled from 'styled-components';

export const Card = styled.section`

  background-color: #FFF;
  border-bottom: 2px solid #ddd;

  padding: 10px 0;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  > a {
    padding-left: 32px;
    padding-right: 10px;
  }

  @media(max-width: 900px) {
        flex-direction: column;
        padding: 24px 0;
    }

`;

export const Container = styled.div`
    margin: 96px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const BoxImage = styled.div`
    display: flex;
    width: 584px;
    height: 392px;
    margin-left: 56px;
    
`;

export const BoxContraints = styled.div`

// caso necessite de novas mudanças

`;

export const TitleSection = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #3D3D3D;
`;

export const Paragraph = styled.p`

    margin: 40px 0;

    text-align: justify;
    width:444px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #4A4A4A;



`;

export const ToLink = styled.a`


    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #5E20A4;
`;