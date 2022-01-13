import React from 'react';
import styled from '@emotion/styled';

export const ListWrapper = styled.li`
  position: relative;
  display: inline-block;
  height: 100%;
  vertical-align: middle;

  & > * {
    height: 100%;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;

    // 반응형
    padding: 0 10px;
  }
`;

const ListItem = ({ children, ...props }) => {
  return <ListWrapper {...props}>{children}</ListWrapper>;
};

export default ListItem;
