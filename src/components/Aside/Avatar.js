import React from 'react';
import styled from '@emotion/styled';
import ProfileDefault from '@assets/icon/profile_default.png';
import { Badge, IconButton, ListItem } from '@components/base';
import { ReactComponent as NewBlockIcon } from '@assets/icon/new-block-icon.svg';
import { MediaQueries } from '@style/mediaQuery';

const AvatarListContainer = styled(ListItem)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-right: 5px;

  ${MediaQueries({ maxWidth: 991 })} {
    display: none;
  }
`;

const ProfileButton = styled(IconButton)`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  vertical-align: top;
  padding: 0 !important;
  margin-right: 11px;

  ${MediaQueries({ maxWidth: 1199 })} {
    margin-right: 0;
  }
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

const AvatarImage = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${ProfileDefault});
`;
const Avatar = ({ ...props }) => {
  return (
    <AvatarListContainer {...props}>
      <ProfileButton>
        <AvatarBorder>
          <AvatarImage />
        </AvatarBorder>
      </ProfileButton>
      <Badge
        style={{
          backgroundColor: 'rgb(51, 102, 255)',
          width: '13px',
          height: '13px',
        }}
      >
        <NewBlockIcon />
      </Badge>
    </AvatarListContainer>
  );
};

export default Avatar;
