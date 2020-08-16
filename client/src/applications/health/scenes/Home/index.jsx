import React from "react";
import { BodyContentBox } from "../../components/BodyContentBox";
import "./style.scss";
import { DateSwitcher } from "../../../components/DateSwitcher";
import { NutritionData } from "./components/NutritionData";
import { BreakfastButtons } from "./components/BreakfastButtons";
import { AddEmotion } from "./components/AddEmotion";
import { AddWater } from "./components/AddWater";
import { AddCoffee } from "./components/AddCoffee";
import { WeightTracker } from "./components/WeightTracker";

export const Home = () => {
  return (
    <div className="">
      <BodyContentBox customClass={"home"}>
        
        <div className="homePageStatsWrapper">
          <div className="dateSwitcherComponentWrapper">
            <DateSwitcher />
          </div>
          <div className="nutritionDataComponentWrapper">
            <NutritionData />
          </div>
          <div className="breakFastButtonsComponentWrapper">
            <BreakfastButtons />
          </div>
          <div className="addEmotionsComponentWrapper">
            <AddEmotion />
          </div>
          <div className="addWaterComponentWrapper">
            <AddWater />
          </div>
          <div className="addCoffeeComponentWrapper">
            <AddCoffee />
          </div>
          <div className="weightTrackerComponentWrapper">
            <WeightTracker />
          </div>
          <div className="addSlipTimeComponentWrapper ">
            
          </div>
        </div>
      </BodyContentBox>
    </div>
  );
};
