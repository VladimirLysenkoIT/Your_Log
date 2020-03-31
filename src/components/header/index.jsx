import React from 'react';

import {Logo} from './Logo.jsx';
import {Navigation} from './Navigation.jsx';

export const Header = () => {
    return (
        <header className="App-header">
            <Logo />
            <Navigation/>
            
      </header>
    );
}