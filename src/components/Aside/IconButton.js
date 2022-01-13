import React from 'react';
import styled from '@emotion/styled';
import Button from '../Button';

const IconWrapper = styled(Button)`
  position: relative;
  margin-top: 5px;
`;

const IconButton = ({ children, ...props }) => {
  return <IconWrapper {...props}>{children}</IconWrapper>;
};

export default IconButton;
