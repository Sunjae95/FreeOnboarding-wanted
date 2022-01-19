import React from 'react';
import styled from '@emotion/styled';
import { MediaQueries } from '@style/mediaQuery';

const IconWrapper = styled.button`
  margin: 0;
  padding: 0 5px;
  border: 0;
  background: none;

  ${MediaQueries({ minWidth: 1200 })} {
    padding: 0 10px;
  }
`;

const IconButton = ({ children, buttonType, ...props }) => {
  return (
    <IconWrapper buttonType={buttonType} {...props}>
      {children}
    </IconWrapper>
  );
};

export default IconButton;
