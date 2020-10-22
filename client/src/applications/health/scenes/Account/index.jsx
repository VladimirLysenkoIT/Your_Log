import React from "react";
import { AuthContext } from '../../../../context/Auth.context';
import { useHttp } from '../../../../hooks/http.hook';

import { BodyContentBox } from "../../components/BodyContentBox";
import { UserDataForm } from "./components/UserDataForm";
import { CaloriesDisplayer } from "./components/CaloriesDisplayer";

import "./style.scss";
import { CaloriesConfigurator } from "./components/CaloriesConfigurator";
import { useMessage } from "../../../../hooks/message.hook";

export const Account = () => {
  const {loading, request} = useHttp()
  const message = useMessage()
  const {token} = React.useContext(AuthContext)
  const [userData, setUserData] = React.useState('')

  const [caloriesAndNutriments, setCaloriesAndNutriments] = React.useState({
    totalCalories: "",
    carbs: "",
    fat: "",
    protein: ""
  });

  const [caloriesRatioFormData, setCaloriesRatioFormData] = React.useState('');

  const getUserDataFromDB = React.useCallback(async () => {
    try {
        const fetched = await request('/api/userdata/get', 'GET', null,{
            authorization: `Bearer ${token}`
        })
        setUserData(fetched)
    } catch (error) {}
  }, [])

  const getNutritionRatioDataFromDB = React.useCallback(async () => {
    try {
        const fetched = await request('/api/nutrientsRatio/get', 'GET', null,{
            authorization: `Bearer ${token}`
        })
        setCaloriesRatioFormData(fetched)
    } catch (error) {}
  }, [])

  React.useEffect(()=>{
      getUserDataFromDB()
  }, [getUserDataFromDB])

  React.useEffect(()=>{
    getNutritionRatioDataFromDB()
  }, [getNutritionRatioDataFromDB])

  React.useEffect(()=>{
    
    console.log('getNutritionRatioDataFromDB under call', caloriesRatioFormData);
  }, [caloriesRatioFormData])

  const updateUserDataInDB = async ()=>{
      try {
          // console.log('update user')
          // console.log(userData);
          
          const data = await request('/api/userdata/update', 'POST', {...userData},{
            authorization: `Bearer ${token}`
        })
          message(data.message)

          if(data.ok){
            // console.log('ok')
          }
          
      } catch (error) {}
  }

  const updateNutritionRatioInDB = async (nutrimentsRatio)=> {
    try {
      const data = await request('/api/nutrientsRatio/update', 'POST', {...nutrimentsRatio},{
        authorization: `Bearer ${token}`
      })
      message(data.message)

      if(data.ok){
        // console.log('ok')
      }
    } catch (error) {}
  }

  return (
    <BodyContentBox customClass={"account"}>
      <div className="row">
        <div className="col s12 l6">
          <UserDataForm
            userData={userData}
            setUserData={setUserData}
            updateUserDataInDB={updateUserDataInDB}
          />
        </div>
        <div className="col s12 l6">
          <CaloriesConfigurator
            userData={userData}
            setCaloriesAndNutriments={setCaloriesAndNutriments}
            updateNutritionRatioInDB={updateNutritionRatioInDB}
            caloriesRatioFormData={caloriesRatioFormData}
            setCaloriesRatioFormData={setCaloriesRatioFormData}
          />
          <CaloriesDisplayer
            caloriesAndNutriments={caloriesAndNutriments}
            caloriesRatioFormData={caloriesRatioFormData}
            setCaloriesRatioFormData={setCaloriesRatioFormData}
          />
        </div>
      </div>
    </BodyContentBox>
  );
};
