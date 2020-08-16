import React from 'react';

import { Logo } from '../Logo/Logo.jsx';
import {Navigation} from './Navigation.jsx';
import './style.scss';

export const Header = () => {
    return (
        <header className="App-header">
            <Logo />
            <Navigation/>
        </header>
        
    );
}