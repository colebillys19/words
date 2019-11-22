/*
 *
 * App
 *
 */

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from 'containers/LandingPage';
import GamePage from 'containers/GamePage';
import NotFoundPage from 'components/NotFoundPage';

import GlobalStyle from '../../global-styles';
export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/game" component={GamePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
