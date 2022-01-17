import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { slideContents } from '@assets/data';
import { prev, next } from '@utils';
import SlideBox from './SlideBox';
import Buttons from './Buttons';

const SlideContainer = styled.div`
  position: relative;
  overflow: hidden;
  //media
  height: auto;
`;
const SlideWrapper = styled.div`
  margin-bottom: 0;
  position: relative;
  display: block;
  box-sizing: border-box;
  user-select: none;
  touch-action: pan-y;
`;

const ButtonContainer = styled.div`
  padding: 0px 50px;
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
`;

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

const DRAG_OFFSET = 300;
const lastIndex = slideContents.length - 1;

const createDragData = () => ({
  itemWidth: 0,
  totalWidth: 0,
  baseLeft: 0,
  startPosition: 0,
  initialize({ itemWidth, totalWidth, baseLeft }) {
    this.itemWidth = itemWidth;
    this.totalWidth = totalWidth;
    this.baseLeft = baseLeft;
  },
  setStartPosition(startPosition) {
    this.startPosition = startPosition;
  },
  reset() {
    this.startPosition = 0;
  },
});

const Slide = ({ ...props }) => {
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [left, setLeft] = useState(0);

  const dragData = useRef(createDragData());
  const slideBoxRef = useRef(null);
  const slideRef = useRef(null);

  useEffect(() => {
    const itemWidth = slideRef.current.offsetWidth;
    const totalWidth = itemWidth * 5;
    const baseLeft = window.innerWidth / 2 - totalWidth / 2;

    dragData.current.initialize({ itemWidth, totalWidth, baseLeft });
  }, []);

  useEffect(() => {
    setLeft(dragData.current.baseLeft);
  }, [index, dragging]);

  const handleClickLeft = (e) => {
    setIndex(prev(index, lastIndex));
  };

  const handleClickRight = (e) => {
    setIndex(next(index, lastIndex));
  };

  const dragStart = (e) => {
    setDragging(true);

    dragData.current.setStartPosition(e.clientX);
  };

  const mouseMove = (e) => {
    if (!dragging) return;

    const offset = e.clientX - dragData.current.startPosition;
    const movedLeft = dragData.current.baseLeft + offset;

    setLeft(movedLeft);
  };

  const dragEnd = (e) => {
    setDragging(false);

    const positionEnd = e.clientX;
    const movedPx = dragData.current.startPosition - positionEnd;

    const right = movedPx < -DRAG_OFFSET;
    const left = movedPx > DRAG_OFFSET;

    if (left) setIndex(next(index, lastIndex));
    if (right) setIndex(prev(index, lastIndex));

    dragData.current.reset();
  };

  return (
    <SlideContainer {...props}>
      <SlideWrapper>
        <ButtonContainer>
          <SlideBox
            index={index}
            onMouseDown={dragStart}
            onMouseMove={mouseMove}
            onMouseUp={dragEnd}
            slideBoxRef={slideBoxRef}
            slideRef={slideRef}
            left={left}
          />
          <Buttons
            handleClickLeft={handleClickLeft}
            handleClickRight={handleClickRight}
          />
        </ButtonContainer>
      </SlideWrapper>
    </SlideContainer>
  );
};
export default Slide;
