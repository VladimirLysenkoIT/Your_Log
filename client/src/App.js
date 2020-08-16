import React from "react";
import "materialize-css/dist/css/materialize.min.css";

import "./App.scss";

import MainRouter from "./MainRouter";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/Auth.context";

function App() {
  const {login, logout, token, userId} = useAuth()
  const isAutentificated = !!token;

  return(
    <AuthContext.Provider value={{
      login, logout, token, userId, isAutentificated
    }}>
      <MainRouter isAutentificated={isAutentificated } />
    </AuthContext.Provider>
  ) 
}

export default App;
