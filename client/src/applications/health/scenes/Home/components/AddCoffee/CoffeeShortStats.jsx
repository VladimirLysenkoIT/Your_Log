import React from "react";

export const CoffeeShortStats = () => {
    
    return (
        <div className="coffeeShortStats">
            <div className="coffein statLine">
                <div className="statsTitle">Coffein:</div>
                <div className="value">0.97 <span className="postfix">mg</span></div>
            </div>
            <div className="callories statLine">
                <div className="statsTitle">Calories:</div>
                <div className="value">70 <span className="postfix">kcal</span></div>
            </div>
            <div className="sugar statLine">
                <div className="statsTitle">Sugar:</div>
                <div className="value">8.2 <span className="postfix">gr</span></div>
            </div>
        </div>
    );
};