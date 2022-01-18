import React from 'react';
import styled from '@emotion/styled';
import { MediaQueries } from '@style/mediaQuery';
import { ReactComponent as SearchIcon } from '@assets/icon/search-icon.svg';
import { IconButton, ListItem } from '@components/base';

const SearchButton = styled(IconButton)`
  position: relative;
  margin-top: 5px;

  ${MediaQueries({ maxWidth: 991 })} {
    margin: 0;
  }
`;

const Search = ({ ...props }) => {
  return (
    <ListItem {...props}>
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </ListItem>
  );
};

export default Search;
