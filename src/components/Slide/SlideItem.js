import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Image from './Image';
import Information from './Information';

const SlideItemContainer = styled.div`
  width: ${window.innerWidth / 2}px;
  height: 100%;
  outline: none;
  position: relative;
  min-height: 1px;
  flex-shrink: 0;

  //media
  padding: 0 12px;
  box-sizing: content-box;
`;

const MediaWrapper = styled.div`
  margin: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  display: inline-block;
`;

const SlideItem = ({ slideRef, src, isMain, title, content }) => {
  return (
    <SlideItemContainer ref={slideRef}>
      <MediaWrapper>
        <Wrapper>
          <Image src={src} isMain={isMain} />
          {isMain && <Information title={title} content={content} />}
        </Wrapper>
      </MediaWrapper>
    </SlideItemContainer>
  );
};

SlideItem.propTypes = {
  isMain: PropTypes.bool,
  src: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default SlideItem;
