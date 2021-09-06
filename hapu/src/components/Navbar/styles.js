import styled from 'styled-components';

export const Container = styled.div`
    height: 64px;
    margin: 0 auto;
    padding: 0 2%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media(max-width: 1000px) {
        height: 100px;
    }
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

    @media(max-width: 1000px) {
        img {
            width: 74px;
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
    height: 36px;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 500;
    background: #3cb54a;
    color: white;
    padding: 0 18px;

    cursor: pointer;
    border: 0;

    @media(max-width: 1000px) {
        height: 56px;
        font-size: 24px;
    }
`;
