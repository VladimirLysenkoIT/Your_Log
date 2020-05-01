import React from "react";
import "./style.scss";

export const NutrientsDisplayer = () => {
  const calories = 2094;
  const protein = 291.2;
  const carbs = 112;
  const fat = 33.6;

  const getProteinPourcentage = () =>{
    const CALORIES_IN_PROTEIN = 4;
    const caloriesFromProtein = protein * CALORIES_IN_PROTEIN;

    const proteinPourcentage = (caloriesFromProtein / calories * 100).toFixed(1);

    return proteinPourcentage;
  }

  const getCarbsPourcentage = () =>{
    const CALORIES_IN_CARB = 4;
    const caloriesFromCarbs = carbs * CALORIES_IN_CARB;

    const carbsPourcentage = (caloriesFromCarbs / calories * 100).toFixed(1);

    return carbsPourcentage;
  }

  const getFatPourcentage = () =>{
    const CALORIES_IN_FAT = 9;
    const caloriesFromFat = fat * CALORIES_IN_FAT;

    const fatPourcentage = (caloriesFromFat / calories * 100).toFixed(1);
    
    return fatPourcentage;
  }

  const getAirPourcentage = () =>{
    const sum = protein * 4 + carbs * 4 + fat * 9;

    const airPourcentage = 100 - (sum / calories * 100);

    if(airPourcentage > 1.5){
      return airPourcentage.toFixed(1);
    }else{
      return 0;
    }
  }

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
      
      <div className="graph">
        <div className="protein" style={{width: getProteinPourcentage()+'%'}}>
          <div className="color"></div>
          <div className="pourcentage">
          {getProteinPourcentage() + '%'}
          </div>
        </div>
        <div className="carbs" style={{width: getCarbsPourcentage()+'%'}}>
          <div className="color"></div>
          <div className="pourcentage">
            {getCarbsPourcentage() + '%'}
          </div>
        </div>
        <div className="fat" style={{width: getFatPourcentage()+'%'}}>
          <div className="color"></div>
          <div className="pourcentage">
            {getFatPourcentage() + '%'}
          </div>
        </div>
        {getAirCalories() && 
        <div className="air" style={{width: getAirPourcentage()+'%'}}>
          <div className="color"></div>
          <div className="pourcentage">
            {getAirPourcentage() + '%'}
          </div>
        </div>
        }
      </div>
      <div className="graphDescription">
        <div className="protein">Protein: {protein}gr</div>
        <div className="carbs">Carbs: {carbs}gr</div>
        <div className="fat">Fat: {fat}gr</div>
        {getAirCalories() && 
          <div className="air">Air: {getAirCalories()}kkal</div>
        }
      </div>
    </div>
  );
};
