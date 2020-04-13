import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import DB from './assets/DB.json';

import { DBContext } from './Services/context/DBContext';

// import { Home } from './scenes/home/index';
import { Account } from './scenes/account';

import './App.scss';

function App() {
  return (
    <DBContext.Provider value={{DB}}>
      <div className="App">
        <Account />

        <main>
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
