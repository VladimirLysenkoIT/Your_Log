import React from 'react';

export const CaloriesDisplayer = ({caloriesAndNutriments}) => {
    return (
        <div className="caloriesDisplayer">
            <div className="caloriesResult">
                <h5>
                    Quantit; des calories totale: {caloriesAndNutriments.totalCalories}.
                </h5>
                <h5>
                    Dont:
                </h5>
                <h5>
                    Glucides: {caloriesAndNutriments.carbs}
                </h5>
                <h5>
                    Gras: {caloriesAndNutriments.fat}
                </h5>
                <h5>
                    Protèines: {caloriesAndNutriments.protein}
                </h5>
            </div>
        </div>
    );
}