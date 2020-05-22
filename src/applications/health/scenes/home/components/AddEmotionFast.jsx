import React from "react";
import "../style.scss";
import { Link } from "react-router-dom";
import { MoreDetails } from "../../../../components/MoreDetails";
import { EmotionCirclesWithDescription } from "../../../../EmotionCirclesWithDescription/Index";

export const AddEmotionFast = () => {
  return (
    <div className="addEmotionFast">
        <div className="title">
            <span>Comment vous allez maintenant ?</span>
        </div>
        <form action="">
         <EmotionCirclesWithDescription />
        </form>
        <div className="buttonsBox">
          <Link to="/health/AddEmotion" className="center-align waves-effect waves-light btn">
            Noter pourquoi
          </Link>
          <Link to="/health/addfood/newProduct" className="center-align waves-effect waves-light btn">
            Enregistrer
          </Link>
          <MoreDetails title={'Regarder les details'} />
        </div>
    </div>
  );
};
