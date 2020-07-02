import React from "react";
import "./style.scss";
import { WeightRanger } from "./WeightRanger";
import { BalanceImage } from "./BalanceImage";
import { WeightStatsGraph } from "./WeightStatsGraph";
import { MoreDetails } from "../../../../../components/MoreDetails";

export const WeightTracker = () => {
  
  return (
    <div className="weightTracker">
      <div className="title">
            <span>Qombien vous pesez ?</span>
      </div>
      <WeightRanger />
      <div className="balanceImageWrapper">
      <BalanceImage />
      </div>
      <div className="weightStatsGraphWrapper">
        <WeightStatsGraph />
      </div>
      <div className="buttonsBox">
        <MoreDetails title={'Regarder les details'} />
      </div>
    </div>
  );
};
