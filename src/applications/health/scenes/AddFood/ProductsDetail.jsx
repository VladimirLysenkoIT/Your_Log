import React from "react";
import M from 'materialize-css';
import { WeightRange } from "./WeightRange";

export const ProductsDetail = ({ currentProduct }) => {
  return (
    <div className="productDetail">
      {currentProduct ? (
        <div className="details">
          <div className="header">
            <h3>{`${currentProduct.name}`}</h3>
            <WeightRange />
          </div>
          
          <p>{`Type: ${currentProduct.type}`}</p>
          <p>{`Calories: ${currentProduct.nutritionFacts.calories}`}</p>
          <p>{`Lipides totales: ${
            currentProduct.nutritionFacts.lipides.total
          }`}</p>
          <p>Dont:</p>
          <p>{`Saturés: ${currentProduct.nutritionFacts.lipides.saturated}`}</p>
          <p>{`Poly-insaturés: ${
            currentProduct.nutritionFacts.lipides.monounsaturated
          }`}</p>
          <p>{`Mono-insaturés: ${
            currentProduct.nutritionFacts.lipides.polyunsaturated
          }`}</p>
          <p>{`Cholestérol: ${currentProduct.nutritionFacts.cholesterol}`}</p>
          <p>{`Sodium: ${currentProduct.nutritionFacts.sodium}`}</p>
          <p>{`Potassium: ${currentProduct.nutritionFacts.potassium}`}</p>
          <p>{`Glucides: ${currentProduct.nutritionFacts.carbs.total}`}</p>
          <p>Dont:</p>
          <p>{`Fibres alimentaires: ${
            currentProduct.nutritionFacts.carbs.fibres
          }`}</p>
          <p>{`Sucres: ${currentProduct.nutritionFacts.carbs.sucres}`}</p>
          <p>{`Protéines: ${currentProduct.nutritionFacts.proteines}`}</p>
          <p>{`Vitamin A: ${currentProduct.nutritionFacts.vitamin_A}`}</p>
          <p>{`Calcium: ${currentProduct.nutritionFacts.calcium}`}</p>
          <p>{`Vitamin C: ${currentProduct.nutritionFacts.vitamin_C}`}</p>
          <p>{`Fet: ${currentProduct.nutritionFacts.fer}`}</p>
          <p>{`Vitamin B6: ${currentProduct.nutritionFacts.vitamin_B6}`}</p>
          <p>{`Magnesium: ${currentProduct.nutritionFacts.magnesium}`}</p>
        </div>
      ) : (
        <div className="noDetails">
          <span>weit please</span>
        </div>
      )}
    </div>
  );
};
