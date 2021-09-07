import styled from 'styled-components';
import {device} from '../../config/config_css_query/media_query_breakpoints';

export const Container = styled.div`
    height: 64px;
    margin-top: 60px;
    
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media ${device.mobileM}{
        height: 250px;
        margin-top: 48px;
        flex-direction: column;
    }

`;

export const NavContent = styled.div`   


    margin-left: 11%;

    @media ${device.mobileM}{
        margin-top: 32px;
        margin-left: 22%;
    }

    > div {
        display: inline-block;
        margin-bottom: 17px;
        

        > a {
            margin-right: 30px;
            margin-bottom: 17px;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            color: #3D3D3D;
            text-decoration: none;
        }
    }
    


    /* > nav ul {
        display: flex;
        list-style: none;
        margin-left: 12px;

        > a {
            text-decoration: none;

            > li {
                display: flex;
                margin-left: 24px;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                color: #3D3D3D;
            }
        }
    } */
`;

export const IconsContent = styled.div`


    display: flex;
    justify-content:center;
    cursor: pointer;

`;

export const Width = styled.div`
padding-top: 4px;
margin-left: 16px;
margin-right: 16px;

`;


export const Copy = styled.div`
    font-size: 14px;
    color: #3D3D3D;
    text-align: center;
    padding: 90px 0px 32px 0px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #3D3D3D;
    mix-blend-mode: normal; 
    opacity: 0.6;

    @media ${device.mobileM}{
        padding: 0px 0px 40px 0px;
    }
`;

export const Divider = styled.hr`
        
    width: 0%;


     @media ${device.mobileM}{
        width: 90%;
        margin: 40px 16px 24px 16px
    }

`;