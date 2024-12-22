import { AppRoutes } from './routes';
import { GlobalStyle } from '@styles/globalStyles';
import { ThemeColorProvider } from '@context/ThemeContext';

export function App () {
  return (
    <ThemeColorProvider>
      <GlobalStyle />
      <AppRoutes />
    </ThemeColorProvider>
  );
}
