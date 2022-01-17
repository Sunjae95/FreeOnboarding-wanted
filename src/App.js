import React from 'react';
import { GlobalStyle } from './style';
import Slide from './components/Slide';
import GNB from './components/GNB';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <GNB />
      <Slide />
    </>
  );
};

export default App;
