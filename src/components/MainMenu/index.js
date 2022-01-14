import React from 'react';
import styled from '@emotion/styled';
import ListItem from './ListItem';
import { ReactComponent as NewIcon } from '@assets/icon/new-icon.svg';
import { ReactComponent as BetaIcon } from '@assets/icon/beta-icon.svg';
import MenuText from './MenuText';

const DynamicTag = styled.div``;

const MainMenu = ({ ...props }) => {
  const menuItems = [
    { text: '채용', badge: null },
    { text: '이벤트', badge: null },
    { text: '직군별 연봉', badge: null },
    { text: '이력서', badge: null },
    { text: '커뮤니티', badge: { tag: 'em', text: <NewIcon /> } },
    { text: '프리랜서', badge: null },
    { text: 'AI 합격예측', badge: { tag: 'span', text: <BetaIcon /> } },
  ];

  return (
    <ul {...props}>
      {menuItems.map((menuItem, i) => (
        <ListItem key={i}>
          <MenuText>
            {menuItem.text}
            {menuItem.badge && (
              <DynamicTag as={menuItem.badge.tag}>
                {menuItem.badge.text}
              </DynamicTag>
            )}
          </MenuText>
        </ListItem>
      ))}
    </ul>
  );
};

export default MainMenu;
