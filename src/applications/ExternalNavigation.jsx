import React from 'react';
import { Link } from "react-router-dom";

export const ExternalNavigation = ({Pages}) =>{
console.log(Pages)
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
                        {Pages.map((page, index)=>{
                            return(
                            <li key={index}>
                                <Link to={`/${page.link}`}>{page.title}</Link>
                            </li>
                            ) 
                        })}
                    </ul>
            </div>
        </div>
    );
}