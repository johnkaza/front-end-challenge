import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Games from './views/games/Games';
import NotFound from './views/NotFound/NotFound';

import history from './utils/history';

const AppRouter: React.FC<{}> = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Games} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
