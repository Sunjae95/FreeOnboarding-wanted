import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ReactComponent as ArrowIcon } from '@assets/icon/arrow-icon.svg';

const InformationContainer = styled.div`
  position: absolute;
  bottom: 28px;
  width: 330px;
  height: 146px;
  border-radius: 4px;
  background-color: #fff;
  opacity: 1;
  text-align: left;
  left: 34px;

  & > h2 {
    margin-top: 20px;
    font-size: 18px;
    line-height: 1;
    font-weight: 700;
    color: #333;
    width: 'auto';
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  & > h3 {
    margin-top: 6px px;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.15;
    color: #666;
    width: 'auto';
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  //media
  & > h2 {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 20px;
    line-height: 1.5;
  }
  & > h3 {
    margin: 0 20px;
    height: 44px;
    font-size: 14px;
    line-height: 1.64;
    color: #333;
  }
`;

const Divider = styled.hr`
  display: block;
  height: 1px;
  margin: 0;
  border: none;
  flex-shrink: 0;
  box-sizing: content-box;
  background-color: #ececec;
`;

const TextContainer = styled.a`
  //media
  margin: 6px 0 0 13px;

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
`;

const TextWrapper = styled.span`
  width: 100%;
  font-size: inherit;
  font-weight: inherit;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
  color: inherit;
`;

const IconButton = styled.span`
  margin-top: -2px;
  margin-right: -1px;
  margin-left: 2px;
`;

const IconWrapper = styled.span`
  width: 100%;
  display: flex;
  align-items: inherit;
  justify-content: inherit;
`;

const Icon = styled(ArrowIcon)`
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  font-size: inherit;
`;

const Information = ({ title, content, ...props }) => {
  return (
    <InformationContainer {...props}>
      <h2>{title}</h2>
      <h3>{content}</h3>
      <Divider />
      <TextContainer>
        <TextWrapper>
          바로가기
          <IconButton>
            <IconWrapper>
              <Icon />
            </IconWrapper>
          </IconButton>
        </TextWrapper>
      </TextContainer>
    </InformationContainer>
  );
};

Information.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Information;
