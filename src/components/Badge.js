import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const BadgeWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: -5px;
  pointer-events: none;
  font-style: normal;
`;

const Badge = ({ span, children, ...props }) => {
  const Tag = span ? 'span' : 'em';
  return (
    <BadgeWrapper as={Tag} {...props}>
      {children}
    </BadgeWrapper>
  );
};

Badge.propTypes = {
  span: PropTypes.bool,
};

export default Badge;
