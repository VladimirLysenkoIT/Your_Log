import React from "react";

export const ExistingCoffees = ({ coffees }) => {
  return (
    <div className="existingCoffees">
        <div className="existingCoffees__title">
            <h3>Exisitng coffees</h3>
        </div>
        <div className="existingCoffees__table">
            {coffees.map((taire, index)=>{
                const coefficient = taire.volume / 100;
                return(
                    <div key={index} className="existingCoffeeBlock">
                        <div  className="line">
                            <div className="name"><strong>{taire.name}</strong></div>
                            <div className="value">{taire.volume} ml</div>
                        </div>
                        <div  className="line">
                            <div className="name">Cofein</div>
                            <div className="value">{(taire.cofein * coefficient).toFixed(2)} ml</div>
                        </div>
                        <div  className="line">
                            <div className="name">Ccalories</div>
                            <div className="value">{(taire.calories * coefficient).toFixed(2)} ml</div>
                        </div>
                        <div  className="line">
                            <div className="name">Carbs</div>
                            <div className="value">{(taire.carbs * coefficient).toFixed(2)} ml</div>
                        </div>
                        <div  className="line">
                            <div className="name">Sugar</div>
                            <div className="value">{(taire.sugar * coefficient).toFixed(2)} ml</div>
                        </div>
                        <div  className="line">
                            <div className="name">Fat</div>
                            <div className="value">{(taire.fat * coefficient).toFixed(2)} ml</div>
                        </div>
                        <div  className="line">
                            <div className="name">Protein</div>
                            <div className="value">{(taire.protein * coefficient).toFixed(2)} ml</div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  );
};
