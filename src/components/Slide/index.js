import styled from '@emotion/styled';
import React from 'react';
import SlideBox from './SlideBox';

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
  overflow: hidden;
  display: block;
  margin: 0;
`;

const Slide = ({ ...props }) => {
  return (
    <SlideContainer {...props}>
      <SlideWrapper>
        <ButtonContainer>
          <SlideBox />
        </ButtonContainer>
      </SlideWrapper>
    </SlideContainer>
  );
};
export default Slide;
