import { createContext, ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';

const ThemeContext = createContext({});

type ThemeProviderProps = {
  children: ReactNode
}

const ThemeColorProvider = ({ children } : ThemeProviderProps) => {
  const themeColor = {
    dark : {
      mainColor: '#070707',
      contrastColor: '#2AD883',
      textColor: '#FFFFFF',
      primaryColor: '#101010',
      secondaryColor: '#232323',
      strokeColor: '#141414',
      primaryFont: '"Poppins", serif',
      secondaryFont:  '"DM Mono", serif',
    },
    light: {
      mainColor: '#F9F9F9',
      contrastColor: '#0073E6',
      textColor: '#1A1A1A',
      primaryColor: '#E0E0E0',
      secondaryColor: '#CFCFCF',
      strokeColor: '#D1D1D1',
      primaryFont: '"Poppins", serif',
      secondaryFont:  '"DM Mono", serif',
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