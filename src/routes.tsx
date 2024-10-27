import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Services } from '@pages/Services';
import { NavLayout } from '@pages/NavLayout';


export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavLayout />}>
        <Route index element={<Navigate to="/services"/>} />
        <Route path="/services" element={<Services />} />
      </Route>
    </Routes>
  </BrowserRouter>
);