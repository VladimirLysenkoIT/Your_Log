import React from "react";
import { BodyContentBox } from "../../components/bodyContentBox";
import "./style.scss";
import { DateSwitcher } from "../../../components/DateSwitcher";

export const Home = () => {
  return (
    <div className="">
      <BodyContentBox customClass={"home"}>

        <div className="dateSwitcher">
          <DateSwitcher />
        </div>
        <div className="nutritionData_hook">nutritionData</div>
        <div className="addBreakfast_hook">addBreakfast</div>
        <div className="addEmotions_hook">emotiions</div>
        <div className="addWater_hook">AddWater</div>
        <div className="addCoffee_hook">AddCofee</div>
        <div className="addSlipTime_hook"></div>
        <h1>Hello it's homepage</h1>
      </BodyContentBox>
    </div>
  );
};
