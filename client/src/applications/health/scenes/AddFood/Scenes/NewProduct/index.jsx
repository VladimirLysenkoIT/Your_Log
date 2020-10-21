import React from "react";


import "./style.scss";
import { BodyContentBox } from "../../../../components/BodyContentBox";
import { NutrientsForm } from "./NutrientsForm";
import { BackButton } from "../../../../../components/BackButton";
import { useHttp } from "../../../../../../hooks/http.hook";
import { AuthContext } from "../../../../../../context/Auth.context";
import { useMessage } from "../../../../../../hooks/message.hook";

export const NewProduct = () => {
  const {loading, request, error,clearError} = useHttp()
  const {token} = React.useContext(AuthContext)
  const message = useMessage()

  React.useEffect(()=>{
    message(error)
    clearError()
  }, [message, error])

  const addNewProductToDb = async (productData)=> {
    try {
      const data = await request('/api/products/addNewProduct', 'POST', {...productData},{
        authorization: `Bearer ${token}`
      })
      message(data.message)

      return data.ok
    } catch (error) {
    }
  }

  return (
    <BodyContentBox customClass={"newProduct"}>
      <div className="row">
        <div className="col s12 l12">
          <div className="newProductHeader">
            <BackButton />
            <span>Add new product</span>
          </div>
          <NutrientsForm 
            addNewProductToDb={addNewProductToDb}
          />
     
        </div>
      </div>
    </BodyContentBox>
  );
};
