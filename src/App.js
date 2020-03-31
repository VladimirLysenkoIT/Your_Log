import React from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import DB from './assets/DB.json';

import {DBContext} from './Services/context/DBContext';

import {Home} from './scenes/home/index';

import './App.scss';

function App() {
  return (
    <DBContext.Provider value={{DB}}>
      <div className="App">
        <Home />

        <main>
          <nav className="externalNavigation">

          </nav>
          <div className="generalNavigation"></div>
          <div className="mainContent"></div>
        </main>













        {/* <header className="App-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        {/* </header> */}

      </div>
    </DBContext.Provider>
  );
}

export default App;
