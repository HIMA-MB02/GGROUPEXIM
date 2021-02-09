import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, AboutUs, Products, ContactUs } from '../components';
import ROUTES from '../constants/route-consts';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.ABOUT_US} component={AboutUs} />
      <Route exact path={ROUTES.PRODUCTS} component={Products} />
      <Route exact path={ROUTES.CONTACT_US} component={ContactUs} />
    </Switch>
  );
};

export default Routes;
