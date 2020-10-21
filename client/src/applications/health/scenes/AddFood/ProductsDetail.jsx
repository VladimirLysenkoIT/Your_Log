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
                <span className="amount">{currentProduct.categoryName} </span>
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
                <span className="amount">{(currentProduct.calories * weightCoefficient).toFixed(1)} </span>
              </div>
            </div>

            <div className="part fatPart">
              <div className="partTitle">
                <span className="title">Lipides totales:</span>
                <span className="amount">{(currentProduct.fat * weightCoefficient).toFixed(1)}</span>
              </div>
               <div className="subDetails">
                <span>Dont:</span>
                <div>
                  <span className="title">Saturés: </span>
                  <span className="amount">{(currentProduct.fat_st * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Poly-insaturés: </span>
                  <span className="amount">{(currentProduct.fat_pst * weightCoefficient).toFixed(1)}</span>
                </div>  
                <div>
                  <span className="title">Mono-insaturés: </span>
                  <span className="amount">{(currentProduct.fat_mst * weightCoefficient).toFixed(1)}</span>
                </div>  
                <div>
                  <span className="title">Cholestérol: </span>
                  <span className="amount">{(currentProduct.cholesterol * weightCoefficient).toFixed(1)}</span>
                </div>
              </div>
            </div>

            <div className="part carbPart">
              <div className="partTitle">
                <span className="title">Glucides totales:</span>
                <span className="amount">{(currentProduct.carbs * weightCoefficient).toFixed(1)}</span>
              </div>
               <div className="subDetails">
                <span>Dont:</span>
                <div>
                  <span className="title">Fibres alimentaires: </span>
                  <span className="amount">{(currentProduct.fiber * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Sucres: </span>
                  <span className="amount">{(currentProduct.sugar * weightCoefficient).toFixed(1)}</span>
                </div>  
              </div>
            </div>

            <div className="part proteinPart">
              <div className="partTitle">
                <span className="title">Protéines:</span>
                <span className="amount">{(currentProduct.proteins * weightCoefficient).toFixed(1)}</span>
              </div>
            </div>

            <div className="part mineralsPart">
              <div className="partTitle">
                <span className="title">Vitamins & Minerals:</span>
              </div>
               <div className="subDetails">
               <div>
                  <span className="title">Vitamin A: </span>
                  <span className="amount">{(currentProduct.vitamin_A * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Vitamin B1: </span>
                  <span className="amount">{(currentProduct.vitamin_B1 * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Vitamin B2: </span>
                  <span className="amount">{(currentProduct.vitamin_B2 * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Vitamin B3: </span>
                  <span className="amount">{(currentProduct.vitamin_B3 * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Vitamin B4 (Pantothenic_acid): </span>
                  <span className="amount">{(currentProduct.pantothenic_acid * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Vitamin B6: </span>
                  <span className="amount">{(currentProduct.vitamin_B6 * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Vitamin B7: </span>
                  <span className="amount">{(currentProduct.vitamin_B7 * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Vitamin B7 (Folate): </span>
                  <span className="amount">{(currentProduct.folate * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Vitamin B8 (Folic acid): </span>
                  <span className="amount">{(currentProduct.folic_acid * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Vitamin B12: </span>
                  <span className="amount">{(currentProduct.vitamin_B12 * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Vitamin C: </span>
                  <span className="amount">{(currentProduct.vitamin_C * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Vitamin D: </span>
                  <span className="amount">{(currentProduct.vitamin_D * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Vitamin E: </span>
                  <span className="amount">{(currentProduct.vitamin_E * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Vitamin K: </span>
                  <span className="amount">{(currentProduct.vitamin_K * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Calcium: </span>
                  <span className="amount">{(currentProduct.calcium * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Iodine: </span>
                  <span className="amount">{(currentProduct.iodine * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Iron: </span>
                  <span className="amount">{(currentProduct.iron * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Beta carotene: </span>
                  <span className="amount">{(currentProduct.beta_carotene * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Chromium: </span>
                  <span className="amount">{(currentProduct.chromium * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Cobalt: </span>
                  <span className="amount">{(currentProduct.cobalt * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Copper: </span>
                  <span className="amount">{(currentProduct.copper * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Magnesium: </span>
                  <span className="amount">{(currentProduct.magnesium * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Manganese: </span>
                  <span className="amount">{(currentProduct.manganese * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Molybdenum: </span>
                  <span className="amount">{(currentProduct.molybdenum * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Phosphorus: </span>
                  <span className="amount">{(currentProduct.phosphorus * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Potassium: </span>
                  <span className="amount">{(currentProduct.potassium * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Selenium: </span>
                  <span className="amount">{(currentProduct.selenium * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Sodium: </span>
                  <span className="amount">{(currentProduct.sodium * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Salt: </span>
                  <span className="amount">{(currentProduct.salt * weightCoefficient).toFixed(1)}</span>
                </div>
                <div>
                  <span className="title">Zinc: </span>
                  <span className="amount">{(currentProduct.zinc * weightCoefficient).toFixed(1)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="noDetails">
          <span>please wait</span>
        </div>
      )}
    </div>
  );
};
