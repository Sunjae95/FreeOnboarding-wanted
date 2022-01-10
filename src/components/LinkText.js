import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const LinkTextWrapper = styled.a`
  ${({ bold }) => bold && `font-weight: 600`};
  font-size: ${({ textSize }) => `${textSize}px`};
`;

const LinkText = ({ children, bold, textSize, ...props }) => {
  return (
    <LinkTextWrapper bold={bold} textSize={textSize} {...props}>
      {children}
    </LinkTextWrapper>
  );
};

LinkText.propTypes = {
  bold: PropTypes.bool,
  textSize: PropTypes.number,
};

export default LinkText;
