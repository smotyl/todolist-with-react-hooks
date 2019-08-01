import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#fe4b6a" />
      <Routes />
    </>
  );
};

export default App;
