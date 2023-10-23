import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { base, light, dark } from './themes.js';

import Nav from './components/Nav.jsx';
import Toggle from './components/Toggle.jsx';
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
        <div>
          <Button isSecondary>Secondary button says: </Button>
          <Button />
        </div>
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
}

export default App;
