import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowIcon } from '@assets/icon/arrow-icon.svg';

const Button = styled.button`
  width: 30px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 120px;
  width: 30px;
  height: 60px;
  opacity: 0.5;
  border-radius: 15px;
  background-color: #fff;

  left: ${({ isLeft }) => isLeft && `${isLeft / 5}px`};
  right: ${({ isRight }) => isRight && `${isRight / 9}px`};
`;

const Buttons = ({ handleClickLeft, handleClickRight }) => {
  return (
    <>
      <Button isLeft={window.innerWidth} onClick={handleClickLeft}>
        <ArrowIcon style={{ transform: 'rotate(180deg)' }} />
      </Button>
      <Button isRight={window.innerWidth} onClick={handleClickRight}>
        <ArrowIcon />
      </Button>
    </>
  );
};

Buttons.propTypes = {
  handleClickLeft: PropTypes.func,
  handleClickRight: PropTypes.func,
};

export default Buttons;
