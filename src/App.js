import React from 'react';

import { ThemeProvider } from 'styled-components';
import standard from './styles/theme';

import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={standard}>
      <GlobalStyles/>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
