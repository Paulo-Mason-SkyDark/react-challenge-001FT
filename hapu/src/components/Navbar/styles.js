import styled from 'styled-components';
import {device} from '../../config/config_css_query/media_query_breakpoints';

export const Container = styled.div`
    height: 64px;
    margin: 0 auto;
    padding: 0 2%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    
`;

export const LeftContent = styled.div`
    display: flex;
    align-items: center;
    
    > nav ul {
        display: flex;
        list-style: none;
        margin-left: 12px;

        > a {
            text-decoration: none;

            > li {
                margin-left: 24px;
                color: white;
            }
        }
    }

    @media(max-width: 360px) {
        img {
            
        }
        > nav {
            display: none;
        }
    }
`;

export const RightContent = styled.div`
    height: 100%;
    display: flex;
    align-items: center;

    > a {
        text-decoration: none;

        > span {
            font-size: 14px;
            font-weight: 500;
            color: white;
            margin-left: 24px;

            cursor: pointer;
        }
    }

    @media(max-width: 1000px) {
        > a {
            display: none;
        }
    }
`;

export const ButtonPrimary = styled.button`


    width:234px;
    height: 44px;
    background: #00A870;
    padding: 0 18px;
    border-radius: 4px;
    cursor: pointer;
    border: 0;

    @media ${device.mobileM}{
        margin-top: 16px;
        margin-right: 16px;
    }

    > h5 {
        font-style: normal;
        text-align: center;
        color: #FFFFFF;
        border-radius: 2px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
    }

    
`;
