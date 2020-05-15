import React from "react";
import "../style.scss";
import { CaloriesDisplayer } from "../../../components/caloriesDisplayer";
import { NutrientsDisplayer } from "../../../components/nutrientsDisplayer";
import { MoreDetails } from "../../../../components/MoreDetails";

export const NutritionData = () => {
  return (
    <div className="nutritionData">
        <CaloriesDisplayer />
        <NutrientsDisplayer />
        <MoreDetails title='See all stats'  />
    </div>
  );
};
