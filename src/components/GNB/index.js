import React from 'react';
import styled from '@emotion/styled';
import Logo from '@components/Logo';
import MainMenu from '@components/MainMenu';
import Aside from '@components/Aside';

const GNBContainer = styled.div`
  position: fixed;
  padding-right: initial;

  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  z-index: 100;
`;

const GNBWrapper = styled.div`
  position: relative;
  max-width: 1060px;
  height: 50px;
  //media
  width: 87.72%;
  //media
  margin: 0 auto;
  height: 50px;
`;

const MainBarNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GNB = ({ ...props }) => {
  return (
    <GNBContainer {...props}>
      <GNBWrapper>
        <MainBarNav>
          <Logo />
          <MainMenu />
          <Aside />
        </MainBarNav>
      </GNBWrapper>
    </GNBContainer>
  );
};

export default GNB;
