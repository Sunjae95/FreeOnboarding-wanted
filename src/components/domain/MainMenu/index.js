import React from 'react';
import styled from '@emotion/styled';
import ListItem from './ListItem';
import MenuText from './MenuText';
import { MediaQueries } from '@style/mediaQuery';
import { menuItems } from '@assets/data';

const MainMenuContainer = styled.ul`
  height: inherit;
  text-align: center;
  margin: 0;

  ${MediaQueries({ maxWidth: 767 })} {
    text-align: left;
  }
  ${MediaQueries({ minWidth: 768, maxWidth: 991 })} {
    justify-content: flex-start;
    margin-right: 30px;
  }
  ${MediaQueries({ minWidth: 992, maxWidth: 1100 })} {
    display: flex;
    flex: 1 1;
    justify-content: space-evenly;
  }
`;

const DynamicTag = styled.div``;

const MainMenu = ({ ...props }) => {
  return (
    <MainMenuContainer {...props}>
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
    </MainMenuContainer>
  );
};

export default MainMenu;
