import styled from '@emotion/styled';
import React from 'react';
import SlideItem from './SlideItem';
import { slideContents } from '@assets/data';

const SlideBoxContainer = styled.div``;

const SlideBox = ({ ...props }) => {
  return (
    <SlideBoxContainer {...props}>
      {slideContents.map((slideContent, i) => (
        <SlideItem
          key={i}
          isFocus={true}
          src={slideContent.src}
          title={slideContent.title}
          content={slideContent.content}
        />
      ))}
    </SlideBoxContainer>
  );
};

export default SlideBox;
