import styled from '@emotion/styled';

const ListItem = styled.li`
  position: relative;
  display: inline-block;
  height: 100%;
  vertical-align: middle;

  & > * {
    height: 100%;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
  }
`;

export default ListItem;
