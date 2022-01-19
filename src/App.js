import React from 'react';
import { GlobalStyle } from '@style';
import { GNB, Main } from '@components/templates';
import { Padding } from '@components/base';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <GNB />
      <Padding />
      <Main />
    </>
  );
};

export default App;
