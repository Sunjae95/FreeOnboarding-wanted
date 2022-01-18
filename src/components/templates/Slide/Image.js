import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ImageContainer = styled.div`
  filter: ${({ isMain }) => (isMain ? 'brightness(100%)' : 'brightness(50%)')};
`;

const ImageWrapper = styled.img`
  display: inline-block;
  pointer-events: none;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
`;

const Image = ({ src, isMain, ...props }) => {
  return (
    <ImageContainer isMain={isMain} {...props}>
      <ImageWrapper src={src}></ImageWrapper>
    </ImageContainer>
  );
};

Image.propTypes = {
  isMain: PropTypes.bool,
  src: PropTypes.string,
};

export default Image;
