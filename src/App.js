import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch
} from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';

import { Health } from './applications/health';
import { Finances } from './applications/finances';
import { Tasks } from './applications/tasks';

import './App.scss';

function App() {
  let { path, url } = useRouteMatch();

  return (
  <Switch>
    <Route exact path="/">

      <Health />
    </Route>
    <Route path="/health">
        <Health />
    </Route>
    <Route path="/finances">
      <Finances />
    </Route>
    <Route path="/todo">
      <Tasks />
    </Route>
    <Route path="/trainings">
      <Redirect to="/todo" />
    </Route>
  </Switch>
  );
}

export default App;
