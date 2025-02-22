import styled from 'styled-components';
import {device} from '../../../config/config_css_query/media_query_breakpoints';


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

    @media ${device.mobileM}{
      display: flex;
      align-items: center;
      text-align: center;
      margin: 0px 16px 16px 16px;
    }

  }

  > p {
    margin: 40px 328px 40px 328px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #3D3D3D;
    width: 784px;



    @media ${device.mobileM}{
      width: 328px;
      margin: 16px 16px;
    }

  }

  > a {

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #5E20A4;

    @media ${device.mobileM}{
      display: flex;
      align-items: center;
      text-align: center;
      margin: 0 16px 64px 16px;
    }


  }

  > div {
    width: 984px;
    height: 392px;
    margin: 64px 228px 104px 228px;

    @media ${device.mobileM}{
      width: 0%;
      height: 0%;
      display: none;
    }
  }
`;

export const Divider = styled.hr`
    display: flex;
    width: 60%;
    margin-bottom: 16px;

    @media ${device.mobileM}{
      width: 90%;
      margin-bottom: 0px;

    }

`;

//TODO: resolver problema de indentação seguir o mesmo padrão da section five