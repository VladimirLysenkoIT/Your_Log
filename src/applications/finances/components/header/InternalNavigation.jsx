import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";

export const InternalNavigation = ({Pages}) =>{
    let { path, url } = useRouteMatch();
    return(
        <div className="internalNavigationWrapper">
                <nav className="internalNavigation">
                    <ul>
                    {Pages.map((page, index)=>{
                        return(
                        <li key={index}>
                            <Link to={`${url}/${page.link}`}>{page.title}</Link>
                        </li>
                        ) 
                    })}
                    </ul>
                </nav>
            </div>
    );
}