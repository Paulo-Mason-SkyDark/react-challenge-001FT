import styled from "styled-components";
import {device} from '../../../config/config_css_query/media_query_breakpoints';


export const Container = styled.div`
    margin: 96px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    @media ${device.mobileM} {
        flex-direction: column;
    }

`;

export const BoxImage = styled.div`
    display: flex;
    width: 456px;
    height: 336px;
    margin-right: 40px;

    @media ${device.mobileM} {
        display: flex;
        width: 312px;
        height: 230px;
        margin: 0px 24px 40px 24px;

    }
    
`;

export const BoxContraints = styled.div`

    > a {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      text-decoration-line: underline;
      color: #5E20A4;

      @media ${device.mobileM} {
          
        display: flex;
        text-align: center;
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
    text-align: center;
    color: #3D3D3D;

    @media ${device.mobileM} {
        width: 226px;
        height: 64px;
        font-size: 22px;
        margin: 0 67px;

    }
`;

export const Paragraph = styled.p`

    margin: 40px 0;

    text-align: justify;
    width:484px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #3D3D3D;

    @media ${device.mobileM} {
    text-align: center;
    display: flex;
    width: 328px;
    height: 196px;
    margin: 16px 16px 24px 16px;

    }

`;