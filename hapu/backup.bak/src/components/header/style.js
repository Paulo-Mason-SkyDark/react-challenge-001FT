import image from 'next/image';
import styled from 'styled-components';


export const HeaderBG = styled.header(props => ({
    background: props.background,
    backgroundImage: props.background-image,
    height: '100%',
  }));



