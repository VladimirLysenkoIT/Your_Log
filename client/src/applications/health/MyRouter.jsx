import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Home } from "./scenes/Home/index.jsx";
import { Account } from "./scenes/Account";
import { AddFood } from "./scenes/AddFood";
import { NewProduct } from "./scenes/AddFood/Scenes/NewProduct";
import { AddEmotion } from "./scenes/AddEmotion";
import { AddTaire } from "./scenes/Home/scenes/AddTaire";
import { CreateCoffee } from "./scenes/Home/scenes/CreateCoffee/index.jsx";


export const MyRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/health/home">
          <Home />
        </Route>
        <Route path="/health/account">
          <Account />
        </Route>
        <Route path="/health/statistics">
          <span>Statistics</span>
        </Route>
        <Route exact path="/health/addfood">
          <AddFood />
        </Route>
        <Route exact path="/health/addfood/newProduct" >
          <NewProduct />
        </Route>
        <Route path="/health/addfood/:eattime" >
          <AddFood />
        </Route>
        <Route exact path="/health/AddEmotion">
          <AddEmotion />
        </Route>
        <Route exact path="/health/AddNewTaire">
          <AddTaire />
        </Route>
        <Route exact path="/health/createcoffee">
          <CreateCoffee />
        </Route>

        <Route path="/health/knowledgebase">
          <span>Knowledge base</span>
        </Route>
        <Redirect to="/health"/>
      </Switch>
    </div>
  );
};
