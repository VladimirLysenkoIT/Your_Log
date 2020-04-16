import React from 'react';
import DB from './assets/DB.json';

import { DBContext } from './Services/context/DBContext';

// import { Home } from './scenes/home/index';
import { Account } from './scenes/account';

export const Tasks = ()=> {
  return (
    <DBContext.Provider value={{DB}}>
      <div className="App">
        <Account />
      </div>
    </DBContext.Provider>
  );
}