import { Home } from '@pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);