import React from "react";
import { BodyContentBox } from "../../components/bodyContentBox";
import "./style.scss";
import { DateSwitcher } from "../../../components/DateSwitcher";
import { NutritionData } from "./components/nutritionData";
import { BreakfastButtons } from "../../components/BreakfastButtons";
import { AddEmotionFast } from "./components/AddEmotionFast";

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
            <AddEmotionFast />
          </div>
          <div className="addWater_hook">AddWater</div>
          <div className="addCoffee_hook">AddCofee</div>
          <div className="addSlipTime_hook"></div>
        </div>
      </BodyContentBox>
    </div>
  );
};
