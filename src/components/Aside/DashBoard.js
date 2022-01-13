import React from 'react';
import styled from '@emotion/styled';
import { ListWrapper } from './ListItem';

const ServiceWrapper = styled(ListWrapper)`
  display: inline-flex;

  &: before {
    display: block;
    content: '';
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: auto 10px;
  }
`;

const ServiceText = styled.a`
  display: inline-block;
  vertical-align: bottom;

  font-size: 13px;
  color: #666;
  line-height: 30px;
  height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 0 10px;
  margin-left: 15px;
  font-weight: 400;
`;

const DashBoard = ({ ...props }) => {
  return (
    <ServiceWrapper {...props}>
      <ServiceText>기업 서비스</ServiceText>
    </ServiceWrapper>
  );
};

export default DashBoard;
