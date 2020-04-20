import React from "react";

export const ProductsList = ({ products, setCurrentProduct }) => {
  const onClickHandlerProductList = event => {
    const id = event.target.dataset.prodid;
    console.log(id);

    getProductById(id);
  };

  const getProductById = id => {
    const currentProduct = products.find(product => {
      return product.id === id;
    });

    setCurrentProduct(currentProduct);
  };

  return (
    <div className="productListWrapper">
      <ul className="productList">
        {products ? (
          products.map((product, index) => {
            return (
              <li
                key={index}
                data-prodid={product.id}
                onClick={onClickHandlerProductList}
              >
                {`${product.name} : (${product.type})`}
              </li>
            );
          })
        ) : (
          <div className="noDetails">
            <span>weit please</span>
          </div>
        )}
      </ul>
      <span>Salutje suis un product list</span>
    </div>
  );
};
