import React from 'react';
import styled from '@emotion/styled';

const BadgeWrapper = styled.span`
  position: absolute;
  top: -2px;
  left: 22px;
  padding: 0 !important;

  display: inline-flex;
  width: 13px;
  height: 13px;
  background-color: rgb(51, 102, 255);
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const Badge = ({ children, ...props }) => {
  return <BadgeWrapper {...props}>{children}</BadgeWrapper>;
};

export default Badge;
