import React from "react";
import { Graph } from "./Graph.jsx";
import { GraphDescription } from "./GraphDescription.jsx";
import "./style.scss";

export const NutrientsDisplayer = () => {
  const calories = 2094;
  const protein = 291.2;
  const carbs = 112;
  const fat = 33.6;

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
    <div className="nutrientsDisplayer">
      <Graph 
        calories={calories}
        protein={protein}
        carbs={carbs}
        fat={fat}
     />
      <GraphDescription
        calories={calories}
        protein={protein}
        carbs={carbs}
        fat={fat}
      />
    </div>
  );
};
