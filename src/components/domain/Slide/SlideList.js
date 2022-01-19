import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import SlideItem from './SlideItem';
import { slideContents } from '@assets/data';
import { pick } from '@utils';

const SlideBoxContainer = styled.div`
  display: flex;
  position: relative;
  top: 0;
  transform: translate(${({ left }) => `${left}px`}, 0);
  box-sizing: border-box;
  margin-bottom: 0;
`;

const lastIndex = slideContents.length - 1;

const SlideList = ({
  index,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  slideListRef,
  slideItemRef,
  left,
}) => {
  const slides = [
    slideContents[pick({ index, lastIndex, offset: -2 })],
    slideContents[pick({ index, lastIndex, offset: -1 })],
    slideContents[index],
    slideContents[pick({ index, lastIndex, offset: 1 })],
    slideContents[pick({ index, lastIndex, offset: 2 })],
  ];

  return (
    <SlideBoxContainer
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      ref={slideListRef}
      left={left}
    >
      {slides.map(({ src, title, content }, i) => (
        <SlideItem
          key={i}
          imgUrl={src}
          isFocus={i === 2}
          title={title}
          content={content}
          slideItemRef={slideItemRef}
        />
      ))}
    </SlideBoxContainer>
  );
};

SlideList.propTypes = {
  index: PropTypes.number,
  onMouseDown: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseUp: PropTypes.func,
  slideListRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLElement) }),
  ]),
  slideItemRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLElement) }),
  ]),
  left: PropTypes.number,
};

export default SlideList;
