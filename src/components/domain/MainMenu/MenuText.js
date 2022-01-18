import React from 'react';
import styled from '@emotion/styled';
import { MediaQueries } from '@style/mediaQuery';

const TextWrapper = styled.a`
  position: relative;
  vertical-align: middle;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px;
  display: inline-block;
  cursor: pointer;

  ${MediaQueries({ minWidth: 992, maxWidth: 1100 })} {
    padding: 15px 0;
    font-size: 13px;
  }
  ${MediaQueries({ minWidth: 768, maxWidth: 991 })} {
    padding: 11px 10px 19px;
    font-size: 13px;
  }
  ${MediaQueries({ maxWidth: 767 })} {
    padding: 11px 10px 19px;
  }

  ${MediaQueries({ maxWidth: 320 })} {
    padding: 15px 8px 15px 20px;
    font-size: 13px;
  }

  & > em {
    position: absolute;
    top: 10px;
    right: -5px;
    pointer-events: none;
    font-style: normal;

    ${MediaQueries({ minWidth: 992, maxWidth: 1100 })} {
      right: -20px;
    }
    ${MediaQueries({ minWidth: 768, maxWidth: 991 })} {
      top: 5px;
      right: -7px;
    }
  }

  & > span {
    position: absolute;
    top: 10px;
    right: -7px;
    pointer-events: none;

    ${MediaQueries({ minWidth: 992, maxWidth: 1100 })} {
      right: -20px;
      top: 9px;
    }

    ${MediaQueries({ minWidth: 768, maxWidth: 991 })} {
      right: -8px;
      top: 4px;
    }
  }
`;

const MenuText = ({ children, ...props }) => {
  return <TextWrapper {...props}>{children}</TextWrapper>;
};

export default MenuText;
