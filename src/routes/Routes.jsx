import React from 'react';
import { Route } from 'react-router-dom';
import { Home, AboutUs } from '../components';
import ROUTES from '../constants/route-consts';

const Routes = () => {
  return (
    <>
      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.ABOUT_US} component={AboutUs} />
    </>
  );
};

export default Routes;
