import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, AboutUs } from '../components';
import ROUTES from '../constants/route-consts';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.ABOUT_US} component={AboutUs} />
    </Switch>
  );
};

export default Routes;
