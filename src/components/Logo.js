import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';
import MenuIcon from '@assets/icon/menu-icon.png';
import LinkText from './LinkText';

const LogoContainer = styled.div`
  display: flex;
`;

const LogoImage = styled.img`
  width: inherit;
  height: inherit;
`;

const LogoTypo = styled.span`
  speak: none;
  font-style: normal;
  font-weight: 600;
  line-height: 1;
  font-size: 17px;
`;

const buttonStyle = {
  marginRight: '15px',
};

const Logo = ({ ...props }) => {
  return (
    <LogoContainer {...props}>
      <Button buttonWidth={16} buttonHeight={14} style={buttonStyle}>
        <LogoImage src={MenuIcon}></LogoImage>
      </Button>
      <LinkText>
        <LogoTypo>wanted</LogoTypo>
      </LinkText>
    </LogoContainer>
  );
};

export default Logo;
