import React from "react";

import { BodyContentBox } from "../../components/BodyContentBox";
import { UserDataForm } from "./components/UserDataForm";
import { CaloriesDisplayer } from "./components/CaloriesDisplayer";

import "./style.scss";
import { CaloriesConfigurator } from "./components/CaloriesConfigurator";

export const Account = () => {
  // let initialFormState = {
  //     firstName: '',
  //     lastName: '',
  //     sex:'',
  //     age:'',
  //     ageTimestamp:'',
  //     ageTextDate:'',
  //     height:'',
  //     weight:'',
  //     trainingsNumber:''
  // };

  let initialFormState = {
    firstName: "Vladimir",
    lastName: "Lysenko",
    sex: "2",
    age: "24",
    ageTimestamp: "811375200000",
    ageTextDate: "18 September 1995",
    height: "164",
    weight: "65",
    trainingsNumber: "1.725"
  };
  const [userDataFormValues, setUserDataFormValues] = React.useState(
    initialFormState
  );
  const [caloriesAndNutriments, setCaloriesAndNutriments] = React.useState({
    totalCalories: "",
    carbs: "",
    fat: "",
    protein: ""
  });

  return (
    <BodyContentBox customClass={"account"}>
      <div className="row">
        <div className="col s12 l6">
          <UserDataForm
            userDataFormValues={userDataFormValues}
            setUserDataFormValues={setUserDataFormValues}
          />
        </div>
        <div className="col s12 l6">
          <CaloriesConfigurator
            userDataFormValues={userDataFormValues}
            setCaloriesAndNutriments={setCaloriesAndNutriments}
          />
          <CaloriesDisplayer caloriesAndNutriments={caloriesAndNutriments} />
        </div>
      </div>
    </BodyContentBox>
  );
};
