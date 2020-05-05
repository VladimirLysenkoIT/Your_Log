                    
import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";

import './style.scss'

export const MoreDetails = ({href = null, onClick= null,title = 'See more details', customClassName = '' }) =>{
    let { path, url } = useRouteMatch();
    return(
        <div className="moreDetailsButtonBlock">
            <Link
                onClick={onClick}
                to={href !== null ? (`${url}${href}`) : (`${url}`)}
                className={`moreDetailsButton ${customClassName}`} 
            >
                {title}
                <i className="material-icons icon-demo">assessment</i>
                {/* <i class="material-icons icon-demo">graphic_eq</i> */}
            </Link>
        </div>
    );
}