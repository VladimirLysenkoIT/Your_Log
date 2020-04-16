import React from 'react';
import {DBContext} from '../../Services/context/DBContext';

export const ExternalNavigation = () =>{
    const context = React.useContext(DBContext);
    const pages = context.DB.sharedData.externalMenu;

    return(
        <div className="externalNavigation_wrapper">
            <div className="externalNavigation_button">
                <a href="/">Menu</a>
                <div className="burger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="externalNavigation">
                <ul>
                    {pages.map((page, index)=>{
                        return(
                        <li key={index}>
                            <a href="/">{page.title}</a>
                        </li>
                        ) 
                    })}
                </ul>
            </div>
        </div>
    );
}