import styled from '@emotion/styled';
import React from 'react';
import SlideItem from './SlideItem';
import { slideContents } from '@assets/data';
import { pick } from '@utils';

const SlideBoxContainer = styled.div`
  display: flex;
  position: relative;
  transform: translate(${({ left }) => `${left}px`}, 0);
  top: 0;
  box-sizing: border-box;
`;

const lastIndex = slideContents.length - 1;

const SlideBox = ({
  index,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  slideBoxRef,
  slideRef,
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
      ref={slideBoxRef}
      left={left}
    >
      {slides.map(({ src, title, content }, i) => (
        <SlideItem
          key={i}
          src={src}
          isMain={i === 2}
          title={title}
          content={content}
          slideRef={slideRef}
        />
      ))}
    </SlideBoxContainer>
  );
};

export default SlideBox;
