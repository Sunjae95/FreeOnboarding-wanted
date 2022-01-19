import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ReactComponent as ArrowIcon } from '@assets/icon/arrow-icon.svg';
import { css } from '@emotion/react';
import { MediaQueries } from '@style/mediaQuery';

const Button = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 40%;
  width: 30px;
  height: 60px;
  opacity: 0.5;
  border-radius: 15px;
  background-color: #fff;
  font-size: 16px;
  cursor: pointer;

  ${({ isRight }) =>
    isRight
      ? css`
          right: 5%;
        `
      : css`
          transform: rotate(180deg);
          left: 5%;
        `}

  ${MediaQueries({ maxWidth: 1200 })} {
    display: none;
  }
`;

const ArrowButton = ({ isRight = false, handleClick }) => {
  return (
    <Button isRight={isRight} onClick={handleClick}>
      <ArrowIcon />
    </Button>
  );
};

ArrowButton.propTypes = {
  isRight: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default ArrowButton;
