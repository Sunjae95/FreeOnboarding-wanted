import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { BACKGROUND_COLOR } from '@assets/colors';

const ButtonWrapper = styled.button`
  width: ${({ buttonWidth }) => `${buttonWidth}px`};
  height: ${({ buttonHeight }) => `${buttonHeight}px`};
  background-color: ${BACKGROUND_COLOR};
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
