import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Image from './Image';
import Information from './Information';

const SlideItemContainer = styled.div`
  outline: none;
  width: 1060px;
  float: left;
  height: 100%;
  min-height: 1px;
  position: relative;
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

const SlideItem = ({ isFocus, src, title, content, ...props }) => {
  return (
    <SlideItemContainer {...props}>
      <MediaWrapper>
        <Wrapper>
          <Image isFocus={isFocus} src={src} />
          <Information title={title} content={content} />
        </Wrapper>
      </MediaWrapper>
    </SlideItemContainer>
  );
};

SlideItem.propTypes = {
  isFocus: PropTypes.bool,
  src: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default SlideItem;
