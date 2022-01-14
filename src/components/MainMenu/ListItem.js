import React from 'react';
import styled from '@emotion/styled';

const ListItemWrapper = styled.li`
  display: inline-block;
  height: inherit;

  &: after {
    height: 100%;
    content: '';
    display: inline-block;
    vertical-align: middle;
  }
`;

const ListItem = ({ children, ...props }) => {
  return <ListItemWrapper {...props}>{children}</ListItemWrapper>;
};

export default ListItem;
