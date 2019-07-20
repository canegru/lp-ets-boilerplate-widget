
import React, { Component, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import 'styles/build/index.css';
import Container from './app/Container';
import { blue, indigo } from '@material-ui/core/colors';
import AgentSdk from './sdk/AgentSdk';
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});


function App() {

  useEffect(() => {
    AgentSdk.init();
  }, [])

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container />
      </ThemeProvider>
    </div>
  );
}

export default App;