import React from 'react';
import styled from '@emotion/styled';
import '@style/logo.css';
import Button from '../Button';
import MenuImage from '@assets/icon/menu-icon.png';
import { MediaQueries } from '@style/mediaQuery';

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${MediaQueries({ minWidth: 768, maxWidth: 991 })} {
    height: 60px;
    width: 100%;
    padding: 15px 0;
  }

  ${MediaQueries({ maxWidth: 767 })} {
    height: 60px;
    width: 100%;
    padding: 15px 20px;
  }
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
