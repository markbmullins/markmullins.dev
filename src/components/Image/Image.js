import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
    /* Set rules to fill background */
    min-height: 100%;
    min-width: 1024px;
      
    /* Set up proportionate scaling */
    width: 100%;
    height: auto;
      
    /* Set up positioning */
    position: fixed;
    top: 0;
    left: 0;
  
  @media screen and (max-width: 1024px) {
    img.image {
      left: 50%;
      margin-left: -512px;   /* 50% */
    }
  }
`;

const Image = ({ source }) => {
    return <StyledImage src={source} alt="A background image"></StyledImage>;
};

export default Image;
