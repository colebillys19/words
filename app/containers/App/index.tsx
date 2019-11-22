/*
 *
 * App
 *
 */

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from 'containers/Landing';
import NotFoundPage from 'containers/NotFoundPage';

import GlobalStyle from '../../global-styles';
export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
