import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {  NavLayout, Services, Portfolio, Habilities, About, Contact } from '@pages/index';

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavLayout />}>
        <Route index element={<Navigate to="/services"/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/habilities" element={<Habilities />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);