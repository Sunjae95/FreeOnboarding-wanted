import React from 'react';
import styled from '@emotion/styled';
import ListItem from './ListItem';
import IconButton from './IconButton';
import Badge from './Badge';
import { ReactComponent as SearchIcon } from '@assets/icon/search-icon.svg';
import { ReactComponent as BellIcon } from '@assets/icon/bell-icon.svg';
import { ReactComponent as NewBlockIcon } from '@assets/icon/new-block-icon.svg';
import DashBoard from './DashBoard';
import Avatar from './Avatar';

const AsideContainer = styled.aside`
  padding: 9px 0;
  height: 100%;
`;

const AsideWrapper = styled.ul`
  height: 100%;
  margin: 0;
`;

const PAside = ({ ...props }) => {
  return (
    <AsideContainer {...props}>
      <AsideWrapper>
        <ListItem>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton style={{ marginRight: '10px' }}>
            <BellIcon />
          </IconButton>
          <Badge style={{ top: '-4px', left: '24px' }}>
            <NewBlockIcon />
          </Badge>
        </ListItem>
        <Avatar />
        <DashBoard />
      </AsideWrapper>
    </AsideContainer>
  );
};

PAside.propTypes = {};

export default PAside;
