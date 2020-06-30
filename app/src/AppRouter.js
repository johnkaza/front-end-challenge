import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Games from './views/games/Games';
import NotFound from './views/NotFound';

import history from './utils/history';

class AppRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Games} />
          <Route exact path="/games" component={Games} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
