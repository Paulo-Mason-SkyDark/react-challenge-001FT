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

  margin-top: 80px;

  > h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    color: #3D3D3D;
    font-style: normal;
    color: #3D3D3D;

  }

  > p {
    margin: 40px 0;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    color: #3D3D3D;

  }

  > a {


    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #5E20A4;
  }

  > div {
    width: 984px;
    height: 392px;
    margin-top: 64px;
  }
`;

export const Divider = styled.hr`
    display: flex;
    width: 60%;
    margin-bottom: 16px;

`;
