import React from 'react';
import {InternalNavigation} from './InternalNavigation';
import {ExternalNavigation} from '../../../ExternalNavigation';

import {DBContext} from '../../Services/context/DBContext';

export const Navigation = () =>{
    const context = React.useContext(DBContext);
    const internalPages = context.DB.parts.caloriesPart.internalPagesList;
    const externalPages = context.DB.sharedData.externalMenu;

    return(
        <div className="navigation">
            <ExternalNavigation Pages={externalPages} />
            <InternalNavigation Pages={internalPages} />
        </div>
    );
}