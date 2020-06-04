import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { MoreDetails } from "../../../../../components/MoreDetails";
import { WaterRange } from "./WaterRange";

export const AddWater = () => {
  return (
    <div className="addWater">
        <div className="title">
            <span>Combien de l'eau vous avez bu ?</span>
        </div>
        <div className="mainContent">
            <WaterRange />
            <Link  to="/health/AddNewTaire" className="addTaire center-align waves-effect waves-light btn">
              Ajouter une taire
            </Link>
            
        </div>
        <div className="buttonsBox">
          <MoreDetails title={'Regarder les details'} />
        </div>
    </div>
  );
};
