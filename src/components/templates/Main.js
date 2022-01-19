import styled from '@emotion/styled';
import Slide from '@components/domain/Slide';
import { MediaQueries } from '@style/mediaQuery';

const MainContainer = styled.main`
  background-color: #fff;

  ${MediaQueries({ minWidth: 1200 })} {
    padding-top: 25px;
  }
`;

const Main = ({ ...props }) => {
  return (
    <MainContainer {...props}>
      <Slide />
    </MainContainer>
  );
};

export default Main;
