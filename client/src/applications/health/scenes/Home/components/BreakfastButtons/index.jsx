import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import "./style.scss";

export const BreakfastButtons = () => {
  return (
    <div className="breakfastButtons">
      <Link
        to='/health/addfood/0'
        className={`moreDetailsButton`} 
      >
        <i className="material-icons icon-demo moveLeft">caccess_alarms</i>
        <span>Petit déjeuner</span>
      </Link>
      <Link
        to='/health/addfood/1'
        className={`moreDetailsButton`} 
      >
        <i className="material-icons icon-demo">restaurant</i>
        <span>Déjeuner</span>
      </Link>
      <Link
        to='/health/addfood/2'
        className={`moreDetailsButton`} 
      >
        <i className="material-icons icon-demo">room_service</i>
        <span>Dîner</span>
        </Link>
      <Link
        to='/health/addfood/3'
        className={`moreDetailsButton`} 
      >
        <i className="material-icons icon-demo ">local_pizza</i>
        <span>Collat. matinale</span>
      </Link>
      <Link
        to='/health/addfood/4'
        className={`moreDetailsButton`} 
      >
        <i className="material-icons icon-demo">free_breakfast</i>
        <span>Goûter</span>
      </Link>
      <Link
        to='/health/addfood/5'
        className={`moreDetailsButton`} 
      >
        <i className="material-icons icon-demo">brightness_3</i>
        <span>Collation</span>
      </Link>
    </div>
  );
};
