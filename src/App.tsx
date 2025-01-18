import { AppRoutes } from './routes';
import { GlobalStyle } from '@styles/globalStyles';
import { ThemeColorProvider } from '@context/ThemeContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App () {
  return (
    <ThemeColorProvider>
      <GlobalStyle />
      <AppRoutes />
      <ToastContainer />
    </ThemeColorProvider>
  );
}
