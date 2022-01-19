import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { MediaQueries } from '@style/mediaQuery';

const ImageContainer = styled.div`
  filter: ${({ isFocus }) =>
    isFocus ? 'brightness(100%)' : 'brightness(50%)'};
  cursor: pointer;

  ${MediaQueries({ maxWidth: 1199 })} {
    height: 183px;
    border-radius: 3px 3px 0 0;
  }
`;

const ImageContent = styled.img`
  display: inline-block;
  pointer-events: none;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
`;

const Image = ({ imgUrl, isFocus = false, ...props }) => {
  return (
    <ImageContainer isFocus={isFocus} {...props}>
      <ImageContent src={imgUrl}></ImageContent>
    </ImageContainer>
  );
};

Image.propTypes = {
  isFocus: PropTypes.bool,
  imgUrl: PropTypes.string,
};

export default Image;
