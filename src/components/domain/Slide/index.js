import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { slideContents } from '@assets/data';
import { prev, next } from '@utils';
import SlideList from './SlideList';
import { ArrowButton } from '@components/base';
import { MediaQueries } from '@style/mediaQuery';

const TopBanner = styled.div`
  position: relative;
  overflow: hidden;

  ${MediaQueries({ minWidth: 1200 })} {
    height: auto;
  }
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
  const slideListRef = useRef(null);
  const slideItemRef = useRef(null);

  useEffect(() => {
    const itemWidth = slideItemRef.current.offsetWidth;
    const totalWidth = itemWidth * 5;
    const baseLeft = window.innerWidth / 2 - totalWidth / 2;

    dragData.current.initialize({ itemWidth, totalWidth, baseLeft });
    setLeft(dragData.current.baseLeft);
  }, []);

  useEffect(() => {
    setLeft(dragData.current.baseLeft);
  }, [index, dragging]);

  const handleClickLeft = () => {
    setIndex(prev(index, lastIndex));
  };

  const handleClickRight = () => {
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
    <TopBanner {...props}>
      <SlideList
        index={index}
        onMouseDown={dragStart}
        onMouseMove={mouseMove}
        onMouseUp={dragEnd}
        slideListRef={slideListRef}
        slideItemRef={slideItemRef}
        left={left}
      />
      <ArrowButton isRight={true} handleClick={handleClickRight} />
      <ArrowButton handleClick={handleClickLeft} />
    </TopBanner>
  );
};
export default Slide;
