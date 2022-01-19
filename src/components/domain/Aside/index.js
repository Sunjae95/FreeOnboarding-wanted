import React from 'react';
import styled from '@emotion/styled';
import { MediaQueries } from '@style/mediaQuery';
import Search from './Search';
import Notice from './Notice';
import Avatar from './Avatar';
import VisibleMenu from './VisibleMenu';
import LeftDivision from './LeftDivision';

const AsideContainer = styled.aside`
  padding: 9px 0;
  height: 100%;
`;

const AsideWrapper = styled.ul`
  height: 100%;
  margin: 0;

  ${MediaQueries({ maxWidth: 767 })} {
    margin-top: -5px;
  }
`;

const Aside = ({ ...props }) => {
  return (
    <AsideContainer {...props}>
      <AsideWrapper>
        <Search />
        <Notice />
        <Avatar />
        <LeftDivision />
        <VisibleMenu />
      </AsideWrapper>
    </AsideContainer>
  );
};

export default Aside;
