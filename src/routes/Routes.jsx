import React from 'react';
import { Route, Routes as RouterRoutes, Navigate } from 'react-router-dom';
import { Home, AboutUs, Products, ContactUs, Gallery } from '../components';
import ROUTES from '../constants/route-consts';

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path={ROUTES.HOME.path} element={<Home />} />
      <Route path={ROUTES.ABOUT_US.path} element={<AboutUs />} />
      <Route path={ROUTES.PRODUCTS.path} element={<Products />} />
      <Route path={ROUTES.CONTACT_US.path} element={<ContactUs />} />
      <Route path={ROUTES.GALLERY.path} element={<Gallery />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </RouterRoutes>
  );
};

export default Routes;
