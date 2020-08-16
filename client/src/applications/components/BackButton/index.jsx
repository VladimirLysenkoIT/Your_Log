import React from "react";
import { useHistory } from "react-router-dom";

import "./style.scss";

export const BackButton = () => {
    let history = useHistory();

    return (
        <button className="waves-effect waves-light btn backButton" type="button" onClick={()=>{history.goBack();}}>
            <i className="material-icons">arrow_back</i>
            Back
        </button>
    );
};
