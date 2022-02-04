import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, Theme, StyledEngineProvider } from '@mui/material';
import theme from './Theme';


// declare module '@mui/styles/defaultTheme' {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   interface DefaultTheme extends Theme {}
// }


const App = (): JSX.Element => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
