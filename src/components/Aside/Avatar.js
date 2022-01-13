import React from 'react';
import styled from '@emotion/styled';
import ProfileDefault from '@assets/icon/profile_default.png';
import { ListWrapper } from './ListItem';
import Button from '../Button';
import Badge from './Badge';
import { ReactComponent as NewBlockIcon } from '@assets/icon/new-block-icon.svg';

const AvatarImage = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${ProfileDefault});
`;

const AvatarBorder = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const AvatarButton = styled(Button)`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  vertical-align: top;
  margin-right: 11px;
  padding: 0;
`;

const Avatar = ({ ...props }) => {
  return (
    <ListWrapper {...props}>
      <AvatarButton>
        <AvatarBorder>
          <AvatarImage />
        </AvatarBorder>
      </AvatarButton>
      <Badge>
        <NewBlockIcon />
      </Badge>
    </ListWrapper>
  );
};

export default Avatar;
