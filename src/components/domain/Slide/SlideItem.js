import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Image, Information } from '@components/base';
import { MediaQueries } from '@style/mediaQuery';

const SlideItemContainer = styled.div`
  width: ${window.innerWidth / 2}px;
  height: 100%;
  outline: none;
  position: relative;
  min-height: 1px;
  flex-shrink: 0;
  margin: 20px 10px;

  ${MediaQueries({ minWidth: 1200 })} {
    padding: 0 12px;
    box-sizing: content-box;
    margin: 0;
  }
`;

const SlideItemWrapper = styled.div`
  width: 100%;
  display: inline-block;
`;

const SlideItem = ({ slideItemRef, imgUrl, isFocus, title, content }) => {
  return (
    <SlideItemContainer ref={slideItemRef}>
      <SlideItemWrapper>
        <Image imgUrl={imgUrl} isFocus={isFocus} />
        {isFocus && <Information title={title} content={content} />}
      </SlideItemWrapper>
    </SlideItemContainer>
  );
};

SlideItem.propTypes = {
  slideItemRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(HTMLElement) }),
  ]),
  isFocus: PropTypes.bool,
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default SlideItem;
