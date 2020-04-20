import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import DB from "./assets/DB.json";
import { DBContext } from "./Services/context/DBContext";

import { MyRouter } from "./MyRouter";

import { Header } from "./components/header/index";
import { Home } from "./scenes/home/index";

export const Health = () => {
  let { path } = useRouteMatch();
  return (
    <DBContext.Provider value={{ DB }}>
      <Header />
      <Switch>
        <Route exact path={`${path}`}>
          <Home />
        </Route>
        <Route path={`${path}/:internalNaviagtionPage`}>
          <MyRouter />
        </Route>
      </Switch>
    </DBContext.Provider>
  );
};
