import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const LinkTextWrapper = styled.a`
  ${({ isMain }) =>
    isMain &&
    css`
      display: inline-block;
      position: relative;
      vertical-align: middle;
      line-height: 20px;
      padding: 15px;
    `}
  ${({ bold }) => bold && `font-weight: 600`};
  font-size: ${({ textSize }) => `${textSize}px`};
`;

const LinkText = ({ children, isMain, bold, textSize, ...props }) => {
  return (
    <LinkTextWrapper isMain={isMain} bold={bold} textSize={textSize} {...props}>
      {children}
    </LinkTextWrapper>
  );
};

LinkText.propTypes = {
  isMain: PropTypes.bool,
  bold: PropTypes.bool,
  textSize: PropTypes.number,
};

export default LinkText;
