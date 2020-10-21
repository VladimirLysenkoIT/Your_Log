import React from "react";
import { Switch, Route, Redirect} from "react-router-dom";

import { Health } from "./applications/health";
import { Authentification } from "./startSide/Authentification";
import { Registration } from "./startSide/Registration";

// import { Finances } from "./applications/finances";
// import { Tasks } from "./applications/tasks";

function MainRouter({isAutentificated}) {
  
  if(isAutentificated){

    return (
      <Switch>
        <Route path="/health">
          <Health />
        </Route>
        <Route path="/finances">
          {/* <Finances /> */}
        </Route>
        <Route path="/todo">
          {/* <Tasks /> */}
        </Route>
        <Route path="/trainings">
          {/* <Redirect to="/todo" /> */}
        </Route>
        
        <Redirect exact from='/' to='/health/addfood/1'/>
      </Switch>
    )
  }else{
    return (
      <Switch>
        <Route exact path="/">
          <Registration />
        </Route>
        <Route exact path="/login">
          <Authentification />
        </Route>
        <Redirect to={'/'} />
      </Switch>
    )
  }
}


export default MainRouter;