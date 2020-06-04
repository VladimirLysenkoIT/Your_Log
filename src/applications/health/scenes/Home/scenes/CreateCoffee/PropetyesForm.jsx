import React from "react";

import "../../style.scss";

export const PropetyesForm = () => {

  return (
    <BodyContentBox customClass={"addTaire"}>
      <div className="row">
        <div className="col s12 l12">
          <div className="newProductHeader">
            <BackButton />
            <span>Add new Taire</span>
          </div>
        </div>
      </div>
    </BodyContentBox>
  );
};
