import React from "react";
import "./style.scss";

export const CaloriesDisplayer = () => {
    const maxCalories = 2200;
    let intakeCalories = 2080;
  return (
    <div className="caloriesDisplayer">
        <span className="intakeCalories">
            {intakeCalories}
        </span>
        <span> / </span>
        <span className="maxCalories">
            {maxCalories}
        </span>
    </div>
  );
};
