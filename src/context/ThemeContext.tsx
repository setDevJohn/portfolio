import { createContext, ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';

const ThemeContext = createContext({});

type ThemeProviderProps = {
  children: ReactNode
}

const ThemeColorProvider = ({ children } : ThemeProviderProps) => {
  const themeColor = {
    dark : {
      mainColor: '#0D0C10',
      contrastColor: '#2AD883',
      textColor: '#FFFFFF',
      cardColor: '#0D0C10f2',
      primaryColor: '#16151B',
      secondaryColor: '#191722',
      strokeColor: '#131312',
    },
    light: {
      mainColor: '#F9F9F9',
      contrastColor: '#0073E6',
      textColor: '#1A1A1A',
      cardColor: '#FFFFFF',
      primaryColor: '#E0E0E0',
      secondaryColor: '#CFCFCF',
      strokeColor: '#D1D1D1',
    },
  };
  const [theme, setTheme] = useState(themeColor.dark);

  const handleChangeTheme = () => {
    const currentTheme = theme === themeColor.dark
      ? themeColor.light : themeColor.dark;

    setTheme(currentTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeColorProvider };