import React from 'react';
import styled from '@emotion/styled';
import '@style/logo.css';
import Button from '../Button';
import MenuImage from '@assets/icon/menu-icon.png';

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
`;

const MainbarButton = styled(Button)`
  margin-top: -2px;
  margin-right: 15px;
`;

const MenuIcon = styled.img`
  width: 17px;
  height: 14px;
  object-fit: contain;
`;

const LogoText = styled.a`
  display: block;

  & > i {
    font-size: 17px;
  }
`;

const Logo = ({ ...props }) => {
  return (
    <LogoContainer {...props}>
      <LogoWrapper>
        <MainbarButton>
          <MenuIcon src={MenuImage}></MenuIcon>
        </MainbarButton>
        <LogoText>
          <i className="icon-logo_new" />
        </LogoText>
      </LogoWrapper>
    </LogoContainer>
  );
};

export default Logo;
