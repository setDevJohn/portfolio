import { createContext, ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';

const themeColor = {
  dark : {
    mainColor: '#171717',
    contrastColor: '#2AD883',
    contrastBgColor: '#445e48',
    textColor: '#FFFFFF',
    primaryColor: '#212121',
    secondaryColor: '#2a2a2a',
    grayColor: '#2b2b2b',
    grayFont: '#7e7e7e',
    primaryFont: '"Poppins", serif',
    secondaryFont:  '"DM Mono", serif',
  },
  light: {
    mainColor: '#F9F9F9',
    contrastColor: '#0073E6',
    contrastBgColor: '#c5c7ff',
    textColor: '#1A1A1A',
    primaryColor: '#E0E0E0',
    secondaryColor: '#CFCFCF',
    grayColor: '#e8e8e8',
    grayFont: '#7e7e7e',
    primaryFont: '"Poppins", serif',
    secondaryFont:  '"DM Mono", serif',
  },
};

const localTheme = localStorage.getItem('theme');

const ThemeContext = createContext({
  theme: themeColor[localTheme === 'light' ? 'light' : 'dark'],
  handleChangeTheme: () => {}
});

type ThemeProviderProps = {
  children: ReactNode
}

const ThemeColorProvider = ({ children } : ThemeProviderProps) => {

  const [theme, setTheme] = useState(themeColor[localTheme === 'light' ? 'light' : 'dark']);

  const handleChangeTheme = () => {
    const currentTheme = theme === themeColor.dark
      ? themeColor.light : themeColor.dark;

    localStorage.setItem('theme', currentTheme.textColor === '#FFFFFF' ? 'dark' : 'light');
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