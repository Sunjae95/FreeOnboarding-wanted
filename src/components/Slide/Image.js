import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ImageContainer = styled.div`
  filter: ${({ isFocus }) =>
    isFocus ? 'brightness(100%)' : 'brightness(50%)'};
`;

const ImageWrapper = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
`;

const Image = ({ src, isFocus, ...props }) => {
  return (
    <ImageContainer isFocus={isFocus} {...props}>
      <ImageWrapper src={src}></ImageWrapper>
    </ImageContainer>
  );
};

Image.propTypes = {
  isFocus: PropTypes.bool,
  src: PropTypes.string,
};

export default Image;
