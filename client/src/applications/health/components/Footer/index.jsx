import React from 'react';
import {DBContext} from '../../Services/context/DBContext';

import './style.scss';

import { Logo } from '../Logo/Logo';
import { InternalNavigation } from './components/InternalNavigation';

export const Footer = () => {
    const context = React.useContext(DBContext);
    const internalPages = context.DB.parts.caloriesPart.internalPagesList;
    console.log('internalPages', internalPages);
    
    return (
        <footer className="">
            <Logo />
            <InternalNavigation Pages={internalPages} />
        </footer>
    );
}