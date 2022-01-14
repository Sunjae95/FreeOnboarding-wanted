import React from 'react';
import styled from '@emotion/styled';

const TextWrapper = styled.a`
  position: relative;
  vertical-align: middle;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px;
  display: inline-block;
  cursor: pointer;

  & > em {
    position: absolute;
    top: 10px;
    right: -5px;
    pointer-events: none;
    font-style: normal;
  }

  & > span {
    position: absolute;
    top: 10px;
    right: -7px;
    pointer-events: none;
  }
`;

const MenuText = ({ children, ...props }) => {
  return <TextWrapper {...props}>{children}</TextWrapper>;
};

export default MenuText;
