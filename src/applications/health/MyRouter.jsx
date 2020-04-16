import React from 'react';
import {useParams} from 'react-router-dom'
import DB from './assets/DB.json';

import { DBContext } from './Services/context/DBContext';

import { Home } from './scenes/home/index';
import { Account } from './scenes/account';
import { Header } from './components/header';

export const MyRouter = ()=> {
  let { internalNaviagtionPage } = useParams();
  console.log(11111111111111111111111111111111111111111111111111);
  
  return (
    <div>
      
      <h1>{`Hello its ${internalNaviagtionPage}`}</h1>
    </div>
  );
}