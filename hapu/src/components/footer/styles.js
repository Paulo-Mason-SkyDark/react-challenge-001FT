import styled from 'styled-components';
import {device} from '../../config/config_css_query/media_query_breakpoints';

export const FooterContainer = styled.footer`
    margin-top: 80px;
    background: #fff;

`;

export const ContentWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
   

    > h2 {
        font-style: normal;
        font-size: 28px;
        font-weight: 500;
        text-align: center;
        line-height: 32px;
        color: #3D3D3D;

        margin-bottom: 16px;

        @media ${device.mobileM}{
            margin-bottom: 0px;
            font-size: 22px;

        }

    }

    > p {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: #3D3D3D;
        margin-bottom: 32px;



        @media ${device.mobileM}{
            font-size: 16px;
            line-height: 28px;
            margin-bottom: 24px
        }
    }

    > a {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: center;
        text-decoration-line: underline;
        color: #5E20A4;

        @media ${device.mobileM} {
            margin-top: 24px;
        }
    }


   



`;

export const ButtonCreateNany = styled.button`
    padding: 20px 42px;
    border-radius: 4px;
    background: #5E20A4;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    flex-direction: row;
    

    @media ${device.mobileM}{
            margin: 0 28px;
            padding: 20px 22px;
            width: 304px;
            height: 68px;
        }


    cursor: pointer;
    border: 0;

    > div {
        padding-left: 10px;
    }

    > div h4 {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
        display: flex;
        align-items: center;
        color: #FFFFFF;

        

    }

    > div p {

        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;

    }

`;