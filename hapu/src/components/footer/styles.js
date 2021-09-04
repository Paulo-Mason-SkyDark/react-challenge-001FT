import styled from 'styled-components';


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
        font-size: 28px;
        font-weight: 500;
        text-align: center;
        margin-bottom: 24px;
    }

    > p {
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        margin-bottom: 24px;
    }

    > a {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */

        display: flex;
        align-items: center;
        text-align: center;
        text-decoration-line: underline;

        /* Brand color / Secondary */

color: #5E20A4;
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