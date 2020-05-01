import React from "react";
import "./style.scss";
import { CaloriesDisplayer } from "../../../components/caloriesDisplayer";
import { NutrientsDisplayer } from "../../../components/nutrientsDisplayer";

export const NutritionData = () => {
  return (
    <div className="nutritionData">
        <CaloriesDisplayer />
        <NutrientsDisplayer />
    </div>
  );
};
