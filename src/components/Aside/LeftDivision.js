import React from 'react';
import styled from '@emotion/styled';
import { ListItem } from '@components/base';
import { MediaQueries } from '@style/mediaQuery';

const ServiceWrapper = styled(ListItem)`
  display: inline-flex;

  &: before {
    display: block;
    content: '';
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: auto 10px;
  }

  ${MediaQueries({ maxWidth: 991 })} {
    display: none;
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
