import styled from 'styled-components';

export const Card = styled.section`
  border-bottom: 2px solid #ddd;

  padding: 40px 0;
  text-align: center;
`;

export const Container = styled.section`
  max-width: 1120px;
  margin: 40px auto;

`;

export const ContentInfo = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftText = styled.section`
  
  > h2 {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 24px;
  }

  > p {
    margin-bottom: 20px;
  }
`;

export const RightImg = styled.section`
  
`;