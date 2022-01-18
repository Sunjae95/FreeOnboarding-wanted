import React from 'react';
import styled from '@emotion/styled';
import { MediaQueries } from '@style/mediaQuery';
import { ReactComponent as MoreMenuIcon } from '@assets/icon/more-menu-icon.svg';
import { IconButton, ListItem } from '@components/base';

const VisibleMenuContainer = styled(ListItem)`
  ${MediaQueries({ minWidth: 992 })} {
    display: none !important;
  }
`;

const MenuButton = styled(IconButton)`
  margin-right: 10px;
  padding-left: 10px;

  ${MediaQueries({ minWidth: 768, maxWidth: 991 })} {
    margin-right: 0;
  }
`;

const VisibleMenu = ({ children, ...props }) => {
  return (
    <VisibleMenuContainer {...props}>
      <MenuButton>
        <MoreMenuIcon />
      </MenuButton>
    </VisibleMenuContainer>
  );
};

VisibleMenu.propTypes = {};

export default VisibleMenu;
