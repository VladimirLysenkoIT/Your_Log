import React from "react";


import "./style.scss";
import { BodyContentBox } from "../../../../components/bodyContentBox";
import { NutrientsForm } from "./NutrientsForm";
import { BackButton } from "../../../../../components/BackButton";

export const NewProduct = () => {

  return (
    <BodyContentBox customClass={"newProduct"}>
      <div className="row">
        <div className="col s12 l12">
          <div className="newProductHeader">
            <BackButton />
            <span>Add new product</span>
          </div>
         <NutrientsForm />
     
        </div>
      </div>
    </BodyContentBox>
  );
};
