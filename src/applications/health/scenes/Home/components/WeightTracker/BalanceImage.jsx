import React from "react";

import "./style.scss";

export const BalanceImage = () => {
  return (
    <div className="balanceImage">
        <div className="mainSquare">
            <div className="display">
                <div className="displayFlash">
                </div>
            </div>
            <div className="footsPlace">
                <div className="leftFoot"></div>
                <div className="rightFoot"></div>
            </div>
        </div>
    </div>
  );
};