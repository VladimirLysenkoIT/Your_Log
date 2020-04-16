import React from 'react';
import {Switch, Route, useParams,useRouteMatch} from 'react-router-dom'
import DB from './assets/DB.json';

import { DBContext } from './Services/context/DBContext';

import { Home } from './scenes/home/index';
import { Account } from './scenes/account';
import { MyRouter } from './MyRouter';

export const Health = ()=> {
  let { path, url } = useRouteMatch();
  return (
    <DBContext.Provider value={{DB}}>
      <Home />
       <Switch>
        <Route exact path={`${path}`}>
          <div className="App">
          </div>
        </Route>
        <Route path={`${path}/:internalNaviagtionPage`}>
         
          <MyRouter />
        </Route>
      </Switch>
      
    </DBContext.Provider>
  );
}