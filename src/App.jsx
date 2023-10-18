import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { base, light, dark } from './themes.js';
import Button from './components/Button.jsx';

const ThemePreferenceContext = React.createContext();

const themesMap = {
  light,
  dark,
};

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

  const theme = { ...base, colors: themesMap[currentTheme] };

  return (
    <ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={theme}>
        <Button isSecondary>Secondary button says: </Button>
        <Button />
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
}

export default App;
