import React from "react";

import { BodyContentBox } from "../../components/bodyContentBox";

import "./style.scss";

import { DBContext } from "../../Services/context/DBContext";
import { ProductsDetail } from "./ProductsDetail";
import { ProductsList } from "./ProductList";

export const AddFood = () => {
  const [currentProduct, setCurrentProduct] = React.useState();

  const context = React.useContext(DBContext);
  const products = context.DB.parts.caloriesPart.products;

  return (
    <BodyContentBox customClass={"ProductListAndProductDetail"}>
      <div className="row">
        <div className="col s12 l6">
          <ProductsDetail currentProduct={currentProduct} />
        </div>
        <div className="col s12 l6">
          <ProductsList
            products={products}
            setCurrentProduct={setCurrentProduct}
          />
        </div>
      </div>
    </BodyContentBox>
  );
};
