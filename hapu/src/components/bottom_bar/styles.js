import styled from 'styled-components';

export const Container = styled.div`
    height: 64px;
    margin: 0 auto;
    margin-top: 60px;
    
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
`;

export const NavContent = styled.div`
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
                color: black;
            }
        }
    }
`;

export const IconsContent = styled.div`
    display: flex;
    align-items: center;
`;


export const Copy = styled.div`
    font-size: 14px;
    color: #3D3D3D;
    text-align: center;
    padding: 24px 0;
`;