import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as BellIcon } from '@assets/icon/bell-icon.svg';
import { ReactComponent as NewBlockIcon } from '@assets/icon/new-block-icon.svg';
import { Badge, IconButton, ListItem } from '@components/base';
import { MediaQueries } from '@style/mediaQuery';

const NotiButton = styled(IconButton)`
  position: relative;
  margin-right: 10px;
  margin-top: 5px;

  ${MediaQueries({ minWidth: 992, maxWidth: 1199 })} {
    margin-right: 5px;
  }

  ${MediaQueries({ maxWidth: 991 })} {
    margin: 0;
  }
`;

const noticeBageStyle = {
  backgroundColor: 'rgb(51, 102, 255)',
  width: '13px',
  height: '13px',
  top: '-4px',
  left: '24px',
};

const Notice = ({ ...props }) => {
  return (
    <ListItem {...props}>
      <NotiButton>
        <BellIcon />
      </NotiButton>
      <Badge style={noticeBageStyle}>
        <NewBlockIcon />
      </Badge>
    </ListItem>
  );
};

Notice.propTypes = {};

export default Notice;
