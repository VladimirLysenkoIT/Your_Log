import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

export const AddFoodRouter = () => {
  let rtm = useRouteMatch();
  console.log(rtm);
  // https://learnwithparam.com/blog/book-details-page-using-react-router/
  return (
    <div>
      <Switch>
        <Route
          path="/health/addfood/:name">
        </Route>

        <Route
       
        
      />
      </Switch>
    </div>
  );
};
