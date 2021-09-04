import styled from 'styled-components';


export const Container = styled.section`
  max-width: 1120px;
  margin: 80px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.section`
  text-align: center;

  > h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 32px;
    /* identical to box height, or 114% */


    /* Grey 24 */

    color: #3D3D3D;
  }

  > p {
    margin-bottom: 20px;
  }

  > div {
    margin-top: 60px;
  }
`;

export const Divider = styled.hr`
    display: flex;
    width: 60%;
    margin-top: 96px;
    margin-bottom: 16px;
`;
