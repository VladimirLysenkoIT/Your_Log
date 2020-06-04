import React from "react";

export const CoffeeNumberDisplayer = ({ glasesNumber }) => {

  return (
    <div className="coffeeNumberDisplayer">
      <div className="today">Today:</div>
        <i className="material-icons">local_cafe</i>
        <span className="egalSymbol">=</span>
        <span className="coffeeCupsNumber">{glasesNumber}</span>
    </div>
  );
};