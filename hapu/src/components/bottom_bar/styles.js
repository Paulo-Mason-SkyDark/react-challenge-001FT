import styled from 'styled-components';

export const Container = styled.div`
    height: 64px;
    margin: 0 auto;
    margin-top: 60px;
    
    display: flex;
    align-items: center;
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
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                /* identical to box height, or 143% */

                text-align: center;

                /* Grey 24 */

                color: #3D3D3D;
            }
        }
    }
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

    > hr {
        width: 0%;
    }

    @media(max-width: 361px){

    font-size: 14px;
    color: #3D3D3D;
    text-align: center;
    padding: 24px 0;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #3D3D3D;
    mix-blend-mode: normal;
    opacity: 0.6;
    }
`;

