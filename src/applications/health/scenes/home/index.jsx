import React from "react";
import { BodyContentBox } from "../../components/BodyContentBox";
import "./style.scss";
import { DateSwitcher } from "../../../components/DateSwitcher";
import { NutritionData } from "./components/NutritionData";
import { BreakfastButtons } from "./components/BreakfastButtons";
import { AddEmotion } from "./components/AddEmotion";
import { AddWater } from "./components/AddWater";
import { AddCoffee } from "./components/AddCoffee";

export const Home = () => {
  return (
    <div className="">
      <BodyContentBox customClass={"home"}>
        
        <div className="homePageStatsWrapper">
          <div className="dateSwitcher_wrapper">
            <DateSwitcher />
          </div>
          <div className="nutritionData_wrapper">
            <NutritionData />
          </div>
          <div className="breakFastButtons_wrapper">
            <BreakfastButtons />
          </div>
          <div className="addEmotions_hook">
            <AddEmotion />
          </div>
          <div className="addWater_hook">
            <AddWater />
          </div>
          <div className="addCoffee_hook">
            <AddCoffee />
          </div>
          <div className="addSlipTime_hook"></div>
        </div>
      </BodyContentBox>
    </div>
  );
};
