import React from "react";
import { WeightRange } from "./Components/WeightRange";
import { WithoutCaloriesCheckbox } from "./Components/WithoutCalloriesCheckbox";
import { ProductSearch } from "./Components/ProductSearch";

export const ProductsList = ({ products, setCurrentProduct, setWeightCoefficient }) => {
  const [isWithCallories, setIsWithCallories] = React.useState(false);
  const onClickHandlerProductList = e => {
      const id = e.currentTarget.dataset.prodid;
      getProductById(id);
  };

  const getProductById = id => {
    const currentProduct = products.find(product => {
      return product.id === id;
    });

    setCurrentProduct(currentProduct);
  };

  const onClickHandlerAddProduct = e => {
    console.log('clicked');
    
  };
  console.log(isWithCallories);
  
  return (
    <div className="productListWrapper">
      <h3>Choisissez un produit</h3>
      <WithoutCaloriesCheckbox
        isWithCallories={isWithCallories}
        setIsWithCallories={setIsWithCallories}
      />
      <ProductSearch /> 
      <ul className="productList">
        {products ? (
          products.map((product, index) => {
            return (
              <li
                key={index}
                data-prodid={product.id}
                onClick={onClickHandlerProductList}
              >
                <div className="listingLineDescription">
                  {`${product.name} : (${product.type})`}
                </div>
                <div className="listingLineButtons">
                  <div className="addGrouppButton">
                    <div className={`listPageweightRangerWrapper ${isWithCallories ? 'hide' : ''}`}>
                      <WeightRange  setWeightCoefficient={setWeightCoefficient} />
                    </div>
                    <i onClick={onClickHandlerAddProduct} className="material-icons">add_circle_outline</i>
                  </div>
                </div>
              </li>
            );
          })
        ) : (
          <div className="noDetails">
            <span>weit please</span>
          </div>
        )}
      </ul>
    </div>
  );
};
