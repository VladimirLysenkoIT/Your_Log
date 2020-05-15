import React from "react";
import "../style.scss";

export const AddEmotionFast = () => {
  return (
    <div className="addEmotionFast">
        <div className="title">
            <span>Comment vous allez maintenant ?</span>
        </div>
        <div className="emotionCircles">
            <div><span>1</span></div>
            <div><span>2</span></div>
            <div><span>3</span></div>
            <div><span>4</span></div>
            <div><span>5</span></div>
            <div><span>6</span></div>
            <div><span>7</span></div>
            <div><span>8</span></div>
            <div><span>9</span></div>

            <div className="emotionDescTerrible">
              <i class="material-icons">arrow_upward</i>
              <span>Terrible</span>
            </div>
            {/*
              
              arrow_upward
              expand_less
              keyboard_arrow_up
            
            */}
            <div className="emotionDescOk">
              <i class="material-icons">expand_less</i>
              <span>Tout va bien</span>
            </div>
            <div className="emotionDescPerfect">
              <i class="material-icons">keyboard_arrow_up</i>
              <span>Parfait</span>
            </div>
        </div>

    </div>
  );
};
