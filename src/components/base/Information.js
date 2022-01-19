import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { MediaQueries } from '@style/mediaQuery';
import { ReactComponent as ArrowIcon } from '@assets/icon/arrow-icon.svg';
import { animationInformation } from '@style/animation';

const InformationContainer = styled.div`
  text-align: center;

  ${MediaQueries({ minWidth: 1200 })} {
    position: absolute;
    bottom: 28px;
    width: 330px;
    height: 146px;
    border-radius: 4px;
    background-color: #fff;
    text-align: left;
    left: 34px;
    animation: ${animationInformation} 0.4s ease-in-out;
  }
`;

const Title = styled.h2`
  margin-top: 20px;
  font-size: 18px;
  line-height: 1;
  font-weight: 700;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${MediaQueries({ minWidth: 1200 })} {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 20px;
    line-height: 1.5;
  }
`;

const Content = styled.h3`
  margin-top: 6px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.15;
  color: #666;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${MediaQueries({ minWidth: 1200 })} {
    margin: 0 20px;
    height: 44px;
    font-size: 14px;
    line-height: 1.64;
    color: #333;
  }
`;

const Divider = styled.hr`
  height: 1px;
  margin: 0;
  border: none;
  flex-shrink: 0;
  background-color: #ececec;
  display: none;

  ${MediaQueries({ minWidth: 1200 })} {
    display: block;
  }
`;

const TextWrapper = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  min-width: 64px;
  box-sizing: border-box;
  border-radius: 25px;
  cursor: pointer;

  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  color: #36f;
  height: 40px;
  padding: 6px 8px;

  ${MediaQueries({ minWidth: 1200 })} {
    margin: 6px 0 0 13px;
  }
`;

const IconWrapper = styled.span`
  font-size: inherit;
  font-weight: inherit;
  display: flex;
  align-items: inherit;
  justify-content: inherit;
  color: inherit;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  fill: currentColor;
`;

const Information = ({ title, content, ...props }) => {
  return (
    <InformationContainer {...props}>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Divider />
      <TextWrapper>
        바로가기
        <IconWrapper>
          <ArrowIcon />
        </IconWrapper>
      </TextWrapper>
    </InformationContainer>
  );
};

Information.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Information;
