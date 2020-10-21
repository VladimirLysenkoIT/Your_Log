import React from "react";
import { WeightRange } from "./Components/WeightRange";
import { WithoutCaloriesCheckbox } from "./Components/WithoutCalloriesCheckbox";
import { ProductSearch } from "./Components/ProductSearch";

export const ProductsList = ({ products, setCurrentProduct, setWeightCoefficient}) => {
  const [isWithCallories, setIsWithCallories] = React.useState(false);
  const onClickHandlerProductList = e => {
      const id = e.currentTarget.dataset.prodid;
      console.log('list clicked. ID:',id);
      getProductById(id);
  };

  const getProductById = id => {
    const currentProduct = products.find(product => {
      return product._id === id;
    });
    console.log('current product:', currentProduct);
    setCurrentProduct(currentProduct);
  };

  const onClickHandlerAddProduct = e => {
    console.log('clicked');
    
  };

  let contentToShow = '';
  
  if(products === null){
    return(
      <div className="noDetails">
        <span>please wait</span>
      </div>
    )
  }


  if(typeof products.productsFromWeb !== 'undefined' || typeof products.customProducts !== 'undefined'){
    console.log('products.customProducts', products.customProducts);
    console.log('products.productsFromWeb', products.productsFromWeb);
    if(products.productsFromWeb.length === 0 && products.customProducts.length === 0){
      return (
        <div className="noDetails">
          <span>No products was finded, try ago</span>
        </div>
      )
    }

    contentToShow = [
      ( 
        products.customProducts.length > 0 && (
          <li
            key={1}
          >
            <div className="listingLineDescription">
              Custom products:
            </div>
          </li>
        )
      ),
      (
        products.customProducts.map((product, index) => {
          console.log('product 123', product);
          console.log('product name 123', product.name);
          console.log('product categoryName 123', product.categoryName);
          return (
            <li
              key={index}
              data-prodid={product._id}
              onClick={onClickHandlerProductList}
            >
              <div className="listingLineDescription">
                {`${product.name} : (${product.categoryName})`}
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
      ),
      (
        products.productsFromWeb.common.length > 0 && (
          <li
            key={1}
          >
            <div className="listingLineDescription">
              Api from internet (common):
            </div>
          </li>
        )
      ),
      (
        products.productsFromWeb.common.map((product, index) => {
          return (
            <li
              key={index}
              data-prodid={product._id}
              onClick={onClickHandlerProductList}
            >
              <div className="listingLineDescription">
                {`${product.food_name}`}
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
      )
    ,
    (
      products.productsFromWeb.common.length > 0 && (
        <li
          key={1}
        >
          <div className="listingLineDescription">
            Api from internet (branded):
          </div>
        </li>
      )
    ),
    (
      products.productsFromWeb.branded.map((product, index) => {
        return (
          <li
            key={index}
            data-prodid={product._id}
            onClick={onClickHandlerProductList}
          >
            <div className="listingLineDescription">
              {`${product.food_name} : (${product.brand_name})`}
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
    )]
  }


  return (
    <div className="productListWrapper">
      <h3>Choisissez un produit</h3>
      <WithoutCaloriesCheckbox
        isWithCallories={isWithCallories}
        setIsWithCallories={setIsWithCallories}
      />
      <ul className="productList">
        {contentToShow}
      </ul>
    </div>
  );
};


// {products ? (
//   products.map((product, index) => {
//     return (
//       <li
//         key={index}
//         data-prodid={product._id}
//         onClick={onClickHandlerProductList}
//       >
//         <div className="listingLineDescription">
//           {`${product.name} : (${product.categoryName})`}
//         </div>
//         <div className="listingLineButtons">
//           <div className="addGrouppButton">
//             <div className={`listPageweightRangerWrapper ${isWithCallories ? 'hide' : ''}`}>
//               <WeightRange  setWeightCoefficient={setWeightCoefficient} />
//             </div>
//             <i onClick={onClickHandlerAddProduct} className="material-icons">add_circle_outline</i>
//           </div>
//         </div>
//       </li>
//     );
//   })
// ) : (
//   <div className="noDetails">
//     <span>please wait</span>
//   </div>
// )}