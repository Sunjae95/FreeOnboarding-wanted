import React from 'react';
import styled from '@emotion/styled';
import { Logo, MainMenu, Aside } from '@components/domain';
import { MediaQueries } from '@style/mediaQuery';

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

  ${MediaQueries({ minWidth: 1200 })} {
    margin: 0 auto;
    height: 50px;
    width: 87.72%;
  }

  ${MediaQueries({ minWidth: 992, maxWidth: 1199 })} {
    margin: 0 auto;
    height: 50px;
    width: 90%;
  }

  ${MediaQueries({ minWidth: 768, maxWidth: 991 })} {
    margin: 0 auto;
    height: 110px;
    width: 90%;
  }

  ${MediaQueries({ maxWidth: 767 })} {
    height: 110px;
  }
`;

const MainBarNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
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
