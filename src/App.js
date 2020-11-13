import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import DisplayAllPosts from './Components/DisplayAllPosts';
import theme from './themes/felicia';

const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <DisplayAllPosts />
    </ThemeProvider>
  )
};

export default App;
