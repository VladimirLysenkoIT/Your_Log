import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Health } from "./applications/health";
import { Finances } from "./applications/finances";
import { Tasks } from "./applications/tasks";

function MainRouter() {
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

export default MainRouter;
