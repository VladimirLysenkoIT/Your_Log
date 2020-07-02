import React from 'react';
import M from 'materialize-css';

import { Link } from "react-router-dom";

export const ExternalNavigation = ({ Pages }) => {
    const initSideNav = () => {
        const externalNav = document.querySelectorAll('.sidenav');
        const instance = M.Sidenav.init(externalNav);
    }

    React.useEffect(() => {
        initSideNav()
    }, [])

    return (
        <div className="externalNavigation_wrapper">
            <div className="externalNavigation_button">
                <a href="#" data-target="slide-out" className="sidenav-trigger externalNavigationTrigger"></a>
                <span className="buttonTitle">Menu</span>
                <div className="burger">
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </div>
            </div>
            

            <ul id="slide-out" className="sidenav">
                <li>
                    <div className="user-view">
                        <div className="background">
                        </div>
                        <a href="#name"><span className="white-text name">John Doe</span></a>
                        <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                        <span>close nav</span>
                    </div>
                </li>

                {Pages.map((page, index) => {
                    return (
                        <li key={index}>
                            <Link className="sidenav-close" to={`/${page.link}`}>{page.title}</Link>
                        </li>
                    )
                })}
            </ul>
          
        </div>

    );
}

{/* <div className="externalNavigation_wrapper">
   <div className="externalNavigation_button">
                 <a href="/">Menu</a>
                 <div className="burger">
                     <div className="burger-line"></div>
                     <div className="burger-line"></div>
                     <div className="burger-line"></div>
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
</div> */}