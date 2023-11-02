import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { base, light, dark } from './themes.js';

import Grid from './components/layout/Grid.jsx';
import Nav from './components/layout/Nav.jsx';
import Toggle from './components/Toggle.jsx';
import Card from './components/Card.jsx';
import Button from './components/Button.jsx';

const ThemePreferenceContext = React.createContext();

const themesMap = {
  light,
  dark,
};

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

  const theme = {
    ...base,
    colors: themesMap[currentTheme],
  };

  return (
    <ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={theme}>
        <Nav links={['test1', 'test2', 'test3']}>
          <Toggle
            onChange={() => {
              let value = currentTheme === 'light' ? 'dark' : 'light';
              setCurrentTheme(value);
            }}
          ></Toggle>
        </Nav>
        <div
          style={{
            outline: '6px solid black',
            margin: '4rem 6rem',
            padding: '4rem 6rem',
          }}
        >
          <Grid>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </Grid>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '4rem',
            }}
          >
            <Button></Button>
          </div>
        </div>
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
}

export default App;
