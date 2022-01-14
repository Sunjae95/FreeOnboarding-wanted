import styled from '@emotion/styled';
import React from 'react';

const SlideContainer = styled.div`
  position: relative;
  overflow: hidden;
  //media
  height: auto;
`;
const SlideWrapper = styled.div``;

const ButtonContainer = styled.div``;

const Slide = ({ ...props }) => {
  return (
    <SlideContainer {...props}>
      <SlideWrapper>
        <ButtonContainer></ButtonContainer>
      </SlideWrapper>
    </SlideContainer>
  );
};
export default Slide;
