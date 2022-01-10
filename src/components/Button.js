import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ButtonWrapper = styled.button`
  width: ${({ buttonWidth }) => `${buttonWidth}px`};
  height: ${({ buttonHeight }) => `${buttonHeight}px`};
`;

const Button = ({ children, buttonWidth, buttonHeight, ...props }) => {
  return (
    <ButtonWrapper
      buttonWidth={buttonWidth}
      buttonHeight={buttonHeight}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  buttonWidth: PropTypes.number,
  buttonHeight: PropTypes.number,
};

export default Button;
