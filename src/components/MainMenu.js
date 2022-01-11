import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import LinkText from './LinkText';
import Badge from './Badge';
import { ReactComponent as NewIcon } from '@assets/icon/new-icon.svg';
import { ReactComponent as BetaIcon } from '@assets/icon/beta-icon.svg';

const MainMenuContainer = styled.ul`
  display: flex;
  list-style: none;
`;

const MainMenu = ({ ...props }) => {
  const menus = [
    { text: '채용', badge: null },
    { text: '이벤트', badge: null },
    { text: '직군별 연봉', badge: null },
    { text: '이력서', badge: null },
    { text: '커뮤니티', badge: { tag: 'em', text: <NewIcon /> } },
    { text: '프리랜서', badge: null },
    { text: 'AI 합격예측', badge: { tag: 'span', text: <BetaIcon /> } },
  ];

  return (
    <MainMenuContainer {...props}>
      {menus.map((menu, i) => (
        <LinkText isMain bold textSize={14} key={i}>
          {menu.text}
          {menu.badge && <Badge as={menu.badge.tag}>{menu.badge.text}</Badge>}
        </LinkText>
      ))}
    </MainMenuContainer>
  );
};

MainMenu.propTypes = {};

export default MainMenu;
