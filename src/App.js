import styled from '@emotion/styled';

const AppContainer = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  background-color: red;
`;

function App() {
  return <AppContainer className="App"></AppContainer>;
}

export default App;
