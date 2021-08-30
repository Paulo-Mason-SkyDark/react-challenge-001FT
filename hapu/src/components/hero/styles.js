import styled from 'styled-components';


export const HeroBG = styled.header`
  top: 0;
  height: 100vh;

  background-color: #9451d0;
  /* background-image: url(${props => props.bg}); */
`;

export const HeroContent = styled.div`
  height: calc(100% - 64px);
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const TextLeft = styled.div`
  
  > h1 {
    font-size: 32px;
    font-weight: 500;
    color: white;
    margin-bottom: 24px;
  }

  > p {
    font-size: 16px;
    font-weight: 400;
    color: white;
    margin-bottom: 32px;
  }

  > div {
    display: flex;
    align-items: center;

    > span {
      font-size: 16px;
      font-weight: 400;
      color: white;
      margin-left: 18px;
    }
    
  }
`;