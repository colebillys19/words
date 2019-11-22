/*
 *
 * App
 *
 */

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from 'containers/Landing';
import Game from 'containers/Game';
import NotFoundPage from 'components/NotFoundPage';

import GlobalStyle from '../../global-styles';
export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/game" component={Game} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
