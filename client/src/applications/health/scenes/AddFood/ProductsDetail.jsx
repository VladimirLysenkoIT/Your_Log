import React from "react";
import M from 'materialize-css';
import { WeightRange } from "./Components/WeightRange";

export const ProductsDetail = ({ currentProduct, weightCoefficient, setWeightCoefficient }) => {
  
  return (
    <div className="productDetail">
      {currentProduct ? (
        <div className="details">
          <div className="header">
            <h3>{`${currentProduct.name}`}</h3>
            <div className="typeAndCategory">
              <div className="partTitle">
                <span className="title">Category: </span>
                <span className="amount">Healthy</span>
              </div>
              <span className="devisor">|</span>
              <div className="partTitle">
                <span className="title">Type: </span>
                <span className="amount">{currentProduct.type} </span>
              </div>
            </div>
            <WeightRange setWeightCoefficient={setWeightCoefficient} />
          </div>
          <div className="productProperties">
            {/* <p>{`Type: ${currentProduct.type}`}</p>
            <p>{`Category: Healthy`}</p> */}
              <h5>{`Nutrition facts:`}</h5>
            

            <div className="part caloriePart">
              <div className="partTitle">
                <span className="title">Calories:</span>
                <span className="amount">{(currentProduct.nutritionFacts.calories * weightCoefficient).toFixed(1)} </span>
              </div>
            </div>

            <div className="part proteinPart">
              <div className="partTitle">
                <span className="title">Protéines:</span>
                <span className="amount">{(currentProduct.nutritionFacts.proteines * weightCoefficient).toFixed(1)}</span>
              </div>
            </div>

            <div className="part carbPart">
              <div className="partTitle">
                <span className="title">Glucides totales:</span>
                <span className="amount">{(currentProduct.nutritionFacts.carbs.total * weightCoefficient).toFixed(1)}</span>
              </div>
               <div className="subDetails">
                <span>Dont:</span>
                <div>
                  <span className="title">Fibres alimentaires: </span>
                  <span className="amount">{(currentProduct.nutritionFacts.carbs.fibres * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Sucres: </span>
                  <span className="amount">{(currentProduct.nutritionFacts.carbs.sucres * weightCoefficient).toFixed(1)}</span>
                </div>  
              </div>
            </div>

            <div className="part fatPart">
              <div className="partTitle">
                <span className="title">Lipides totales:</span>
                <span className="amount">{(currentProduct.nutritionFacts.lipides.total * weightCoefficient).toFixed(1)}</span>
              </div>
               <div className="subDetails">
                <span>Dont:</span>
                <div>
                  <span className="title">Saturés: </span>
                  <span className="amount">{(currentProduct.nutritionFacts.lipides.saturated * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Poly-insaturés: </span>
                  <span className="amount">{(currentProduct.nutritionFacts.lipides.monounsaturated * weightCoefficient).toFixed(1)}</span>
                </div>  
                <div>
                  <span className="title">Mono-insaturés: </span>
                  <span className="amount">{(currentProduct.nutritionFacts.lipides.polyunsaturated * weightCoefficient).toFixed(1)}</span>
                </div>  
                <div>
                  <span className="title">Cholestérol: </span>
                  <span className="amount">{(currentProduct.nutritionFacts.cholesterol * weightCoefficient).toFixed(1)}</span>
                </div>
              </div>
            </div>

            

            <div className="part mineralsPart">
              <div className="partTitle">
                <span className="title">Vitamins & Minerals:</span>
              </div>
               <div className="subDetails">
                <div>
                  <span className="title">Sodium: </span>
                  <span className="amount">{(currentProduct.nutritionFacts.sodium * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Potassium: </span>
                  <span className="amount">{(currentProduct.nutritionFacts.potassium * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Magnesium: </span>
                  <span className="amount">{(currentProduct.nutritionFacts.magnesium * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Calcium: </span>
                  <span className="amount">{(currentProduct.nutritionFacts.calcium * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Fer: </span>
                  <span className="amount">{(currentProduct.nutritionFacts.fer * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Vitamin A: </span>
                  <span className="amount">{(currentProduct.nutritionFacts.vitamin_A * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Vitamin C: </span>
                  <span className="amount">{(currentProduct.nutritionFacts.vitamin_C * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Vitamin B6: </span>
                  <span className="amount">{(currentProduct.nutritionFacts.vitamin_B6 * weightCoefficient).toFixed(1)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="noDetails">
          <span>weit please</span>
        </div>
      )}
    </div>
  );
};
