import React from "react";

import "./style.scss";

export const WeightRanger = () => {
const [weightUnit, setWeightUnit] = React.useState('kg');
const [weight, setWeight] = React.useState(64.01);
  
  const addWeight = () => {
    const newWeight = weight + 0.10;
    setWeight(newWeight)
  }

  const minusWeight = () => {
    const newWeight = weight - 0.10;
    setWeight(newWeight)
  }

  return (
    <div className="weightRanger">
      <div className="rangeWrapper">
        <div className="range">
          <button 
            onClick={minusWeight}
            className="back"
            type="button"
            >-</button>
            <div className="weightDisplayer">
              <div className="weight">
              <span>{weight.toFixed(2)}</span>
              </div>
              <div className="weightUnit">
                <span>{weightUnit}</span>
              </div>
            </div>
            <button
            onClick={addWeight}
            className={`forward`}
            type="button"
            >+</button>
        </div>
      </div>
      <div className="saveButtonWrapper">
        <button className="createNew center-align waves-effect waves-light btn">
          Save
        </button>
      </div>
    </div>
  );
};
