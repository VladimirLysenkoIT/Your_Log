import React from 'react';
import {DBContext} from '../../Services/context/DBContext';


export const InternalNavigation = () =>{
    const context = React.useContext(DBContext);
    const pages = context.DB.parts.caloriesPart.internalPagesList;
    
    return(
        <div className="internalNavigationWrapper">
                <nav className="internalNavigation">
                    <ul>
                    {pages.map((page, index)=>{
                        return(
                        <li key={index}>
                            <a href="/">{page.title}</a>
                        </li>
                        ) 
                    })}
                    </ul>
                </nav>
            </div>
    );
}