import React, { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const MainPage = lazy(() => import('Pages/MainPage'));

export const routePaths = {
  main: '/main',
};

const getRoutes = () => {
  return(
    <Switch>
      <Route
        exact
        path='/'
        render={props =>
          <Redirect to={routePaths.main} />
        }
      />
      <Route
        exact
        path={routePaths.main}
        render={props =>
          <MainPage {...props} />
        }
      />
    </Switch>
  );
};

export default getRoutes;
