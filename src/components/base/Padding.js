import styled from '@emotion/styled';
import { MediaQueries } from '@style/mediaQuery';

const Padding = styled.div`
  height: 50px;

  ${MediaQueries({ maxWidth: 991 })} {
    height: 110px;
  }
`;

export default Padding;
