import React, { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ExecutionPage = lazy(() => import('Pages/ExecutionPage'));
const PortfolioPage = lazy(() => import('Pages/PortfolioPage'));
const TransactionsPage = lazy(() => import('Pages/TransactionsPage'));
const OrdersPage = lazy(() => import('Pages/OrdersPage'));

export const routePaths = {
  orders: '/orders',
  execution: '/execution',
  portfolio: '/portfolio',
  transactions: '/transactions',
};

const getRoutes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={props => <Redirect to={routePaths.orders} />}
      />
      <Route
        exact
        path={routePaths.orders}
        render={props => <OrdersPage {...props} />}
      />
      <Route
        exact
        path={routePaths.execution}
        render={props => <ExecutionPage {...props} />}
      />
      <Route
        exact
        path={routePaths.portfolio}
        render={props => <PortfolioPage {...props} />}
      />
      <Route
        exact
        path={routePaths.transactions}
        render={props => <TransactionsPage {...props} />}
      />
    </Switch>
  );
};

export default getRoutes;
