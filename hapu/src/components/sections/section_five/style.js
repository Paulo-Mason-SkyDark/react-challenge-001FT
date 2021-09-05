import styled from "styled-components";
import {device} from '../../../config/config_css_query/media_query_breakpoints';




export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;


export const TitleSection = styled.h2`

    padding: 40px 0px 40px 0px;
    color: #3D3D3D;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 32px;
    
    @media ${device.mobileM}{
        padding: 24px 0px 16px 0px;
        font-size: 22px;
        text-align: center;
        color: #3D3D3D;
        margin: 0 16px;
    }
    

`;

export const Paragraph = styled.p`

        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
        text-align: center;
        color: #3D3D3D;
        width: 65%;

@media ${device.mobileM}{
        width: 328px;
        margin: 0 16px;
    }
    
    

`;
