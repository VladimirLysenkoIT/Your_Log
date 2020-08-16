import React from "react";
import "./styles.scss";

export const EmotionCirclesWithDescription = () => {
  return (
    <div className="emotionCirclesWithDescription">
        <div className="emotionCircles">
            <label htmlFor="emotion1" className="circleWrapper">
            <input type="radio" name="emotions" id="emotion1"/>
            <span className="lever circle1">1</span>
            </label>
            <label htmlFor="emotion2" className="circleWrapper">
            <input type="radio" name="emotions" id="emotion2"/>
            <span className="lever circle2">2</span>
            </label>
            <label htmlFor="emotion3" className="circleWrapper">
            <input type="radio" name="emotions" id="emotion3"/>
            <span className="lever circle3">3</span>
            </label>
            <label htmlFor="emotion4" className="circleWrapper">
            <input type="radio" name="emotions" id="emotion4"/>
            <span className="lever circle4">4</span>
            </label>
            <label htmlFor="emotion5" className="circleWrapper">
            <input type="radio" name="emotions" id="emotion5"/>
            <span className="lever circle5">5</span>
            </label>
            <label htmlFor="emotion6" className="circleWrapper">
            <input type="radio" name="emotions" id="emotion6"/>
            <span className="lever circle6">6</span>
            </label>
            <label htmlFor="emotion7" className="circleWrapper">
            <input type="radio" name="emotions" id="emotion7"/>
            <span className="lever circle7">7</span>
            </label>
            <label htmlFor="emotion8" className="circleWrapper">
            <input type="radio" name="emotions" id="emotion8"/>
            <span className="lever circle8">8</span>
            </label>
            <label htmlFor="emotion9" className="circleWrapper">
            <input type="radio" name="emotions" id="emotion9"/>
            <span className="lever circle9">9</span>
            </label>
        </div>
        <div className="emotionDescription">
        <div className="emotionDescTerrible">
            <i className="material-icons">expand_less</i>
            <span>Terrible</span>
        </div>
        <div className="emotionDescOk">
            <i className="material-icons">expand_less</i>
            <span>ça va</span>
        </div>
        <div className="emotionDescPerfect">
            <i className="material-icons">keyboard_arrow_up</i>
            <span>Parfait</span>
        </div>
        </div>
    </div>
  );
};
