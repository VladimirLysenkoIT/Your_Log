import React from 'react';

export const CaloriesDisplayer = ({caloriesAndNutriments}) => {
    return (
        <div className="caloriesDisplayer">
            <div className="caloriesResult">
                <p>
                    Quantité des calories totale: {caloriesAndNutriments.totalCalories} dont:
                </p>
                <p>
                    Glucides: {caloriesAndNutriments.carbs}
                </p>
                <p>
                    Gras: {caloriesAndNutriments.fat}
                </p>
                <p>
                    Protèines: {caloriesAndNutriments.protein}
                </p>
            </div>
        </div>
    );
}