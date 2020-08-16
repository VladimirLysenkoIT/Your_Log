import React from "react";
import "../../style.scss";
import { CaloriesDisplayer } from "../../../../components/CaloriesDisplayer";
import { NutrientsDisplayer } from "../../../../components/NutrientsDisplayer";
import { MoreDetails } from "../../../../../components/MoreDetails";

export const NutritionData = () => {
  return (
    <div className="nutritionData">
        <CaloriesDisplayer />
        <NutrientsDisplayer />
        <MoreDetails title='See all stats'  />
    </div>
  );
};
