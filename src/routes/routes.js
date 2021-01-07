import React from "react";
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { history } from '../_helpers';
import { PrivateRoute } from '../_components';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

function routes() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default routes;
