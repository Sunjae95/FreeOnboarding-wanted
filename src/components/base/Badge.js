import React from 'react';
import styled from '@emotion/styled';

const BadgeWrapper = styled.span`
  position: absolute;
  top: -2px;
  left: 22px;
  padding: 0 !important;

  display: inline-flex;
  width: 16px;
  height: 16px;
  background: #36f;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const Badge = ({ children, ...props }) => {
  return <BadgeWrapper {...props}>{children}</BadgeWrapper>;
};

export default Badge;
