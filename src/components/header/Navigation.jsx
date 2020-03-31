import React from 'react';
import {InternalNavigation} from './InternalNavigation';
import {ExternalNavigation} from './ExternalNavigation';



export const Navigation = () =>{
    
    return(
        <div className="navigation">
            <ExternalNavigation />
            <InternalNavigation />
        </div>
    );
}