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

  const getUserDataFromDB = React.useCallback(async () => {
    try {
        const fetched = await request('/api/userdata/get', 'GET', null,{
            authorization: `Bearer ${token}`
        })
        setUserData(fetched)
    } catch (error) {}
  }, [])

  React.useEffect(()=>{
      getUserDataFromDB()
  }, [getUserDataFromDB])

  const updateUserDataInDB = async ()=>{
      try {
          console.log('update user')
          console.log(userData);
          
          const data = await request('/api/userdata/update', 'POST', {...userData},{
            authorization: `Bearer ${token}`
        })
          message(data.message)

          if(data.ok){
            console.log('ok')
          }
          
      } catch (error) {}
  }

  const setNutritionRatioInDB = async (nutrimentsRatio)=> {
    try {
      const data = await request('/api/nutrientsRatio/update', 'POST', {...nutrimentsRatio},{
        authorization: `Bearer ${token}`
      })
      message(data.message)

      if(data.ok){
        console.log('ok')
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
            setNutritionRatioInDB={setNutritionRatioInDB}
          />
          <CaloriesDisplayer
            caloriesAndNutriments={caloriesAndNutriments}
          />
        </div>
      </div>
    </BodyContentBox>
  );
};
