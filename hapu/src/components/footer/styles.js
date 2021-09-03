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
`;

export const ButtonCreateNany = styled.button`
    padding: 20px 42px;
    border-radius: 2px;
    background: #5E20A4;
    margin-bottom: 40px;

    cursor: pointer;
    border: 0;

    > span {
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        color: white;
    }

`;