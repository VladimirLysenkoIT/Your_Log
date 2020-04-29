import React from "react";
import { BodyContentBox } from "../../components/bodyContentBox";

import "./style.scss";

export const Home = () => {
  return (
    <div className="">
      <BodyContentBox customClass={"home"}>

        <div className="dateSwitcher">date switcher</div>
        <div className="caloriesAndNUtrients"></div>
        <div className="caloriesDisplayer">caloriesDisplayer</div>
        .nutrientsStats
        <h1>Hello it's homepage</h1>
      </BodyContentBox>
    </div>
  );
};
