import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import './style.scss';
import { useAuth } from '../../../../hooks/auth.hook';

export const InternalNavigation = ({Pages}) =>{
    let { path, url } = useRouteMatch();
    const {logout} = useAuth()

    const logoutHandler = () => {
        logout()
    }

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
                        <li>
                            <a href='/' onClick={logoutHandler}>Log out</a>
                        </li>
                    </ul>
                </nav>
            </div>
    );
}