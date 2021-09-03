import styled from 'styled-components';


export const Container = styled.section`
  max-width: 1120px;
  margin: 40px auto;

`;

export const ContentInfo = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RightText = styled.section`

  
  > h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 32px;
    color: #3D3D3D;
  }

  > p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  > a {

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    text-decoration-line: underline;

    /* Brand color / Secondary */

    color: #5E20A4;
  }


`;

export const LeftImg = styled.section`
  
`;