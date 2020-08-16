import React from "react";
import "./style.scss";

export const GraphDescription = ({ calories,protein,carbs,fat }) => {

  const getAirCalories = () =>{
    const sum = protein * 4 + carbs * 4 + fat * 9;
    const airCalories =  calories - sum;

    if(airCalories > 1.5){
      return airCalories.toFixed(1);
    }else{
      return null;
    }
  }

  return (
      <div className="graphDescription">
        <div className="protein">Protein: {protein}gr</div>
        <div className="carbs">Carbs: {carbs}gr</div>
        <div className="fat">Fat: {fat}gr</div>
        {getAirCalories() && 
          <div className="air">Air: {getAirCalories()}kkal</div>
        }
      </div>
  );
};
