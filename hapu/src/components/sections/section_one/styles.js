import styled from 'styled-components';
import {device} from '../../../config/config_css_query/media_query_breakpoints';

export const Card = styled.section`

  background-color: #FFF;
  border-bottom: 2px solid #ddd;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0px;

  > a {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #5E20A4;
    padding-left: 32px;
    padding-right: 10px;
  }


    > h5 {
        font-family: Helvetica Neue;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
    }

    @media ${device.mobileM} {
    flex-direction: column;

    > a {
        width: 212px;
        text-decoration-line: underline;
        padding: 16px 0px;

     }
    
    > h5 {
        font-family: Inter;
        font-size: 14px;
        line-height: 20px;
     }

    }


`;

export const Container = styled.div`
    margin: 96px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    @media ${device.mobileM}{
        flex-direction: column-reverse;
        margin: 64px 0;
    }
`;

export const BoxImage = styled.div`
    display: flex;
    width: 584px;
    height: 392px;
    margin-left: 56px;

    @media ${device.mobileM}{
        width: 304px;
        height: 204px;
        margin: 0px 28px 24px 28px;
    }
    
`;

export const BoxContraints = styled.div`

// caso necessite de novas mudanças

    @media ${device.mobileM}{
        > div {
            display: flex;
            margin: 0 92px
        }
    }

`;

export const TitleSection = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #3D3D3D;

    @media ${device.mobileM}{
        margin: 0 71px; 
        font-size: 22px;
        text-align: center;
    }
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

    @media ${device.mobileM} {
        margin: 16px 16px 24px 16px;
        width: 328px;
        height: 308px;
        text-align: center;
        color: #3D3D3D;
    }



`;

export const ToLink = styled.a`


    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #5E20A4;

`;