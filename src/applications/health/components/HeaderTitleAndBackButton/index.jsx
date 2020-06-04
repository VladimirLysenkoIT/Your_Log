import React from "react";

import "./style.scss";
import { BackButton } from "../../../components/BackButton";

export const HeaderTitleAndBackButton = ({title}) => {
  return (
    <div className="headerTitleAndBackButton">
         <BackButton />
        <h2>{title}</h2>
    </div>
  );
};




