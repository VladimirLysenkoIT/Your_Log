import React from "react";

import "./style.scss";
import { BodyContentBox } from "../../../../components/BodyContentBox";
import { BackButton } from "../../../../../components/BackButton";
import { HeaderTitleAndBackButton } from "../../../../components/HeaderTitleAndBackButton";
import { NewCoffeTable } from "./NewCoffeTable";
import { ExistingCoffees } from "./ExistingCoffees";

export const CreateCoffee = () => {
    const textInputsValueInitial = {
        name: "", volume: ""
    }
    const coffees = [
        {name: "Espresso", volume: 250, cofein: 0.25, calories: 70, carbs: 5, sugar: 4, fat:1, protein:0.7, id:1},
        {name: "Cappuccino", volume: 100, cofein: 0.25, calories: 70, carbs: 5, sugar: 4, fat:1, protein:0.7, id:2},
        {name: "Latte", volume: 300, cofein: 0.25, calories: 70, carbs: 5, sugar: 4, fat:1, protein:0.7, id:3},
        {name: "Arabica", volume: 500, cofein: 0.25, calories: 70, carbs: 5, sugar: 4, fat:1, protein:0.7, id:4}
   ]
    const [textInputsValue, setTextInputsValue] = React.useState(textInputsValueInitial);
    const textInputsChangeHandler = (e) =>{
        let newTextInputsValue = textInputsValue;
        newTextInputsValue[e.target.name] = e.target.value;
        
        setTextInputsValue(newTextInputsValue)
    }
    
    return (
    <BodyContentBox customClass={"createCoffee"}>
        
        <div className="header">
            <HeaderTitleAndBackButton title={'Create new coffee'} />
        </div>
        <div className="row">
            <div className="col s12 l6">
                <ExistingCoffees
                    coffees={coffees}
                />
            </div>
            <div className="col s12 l6">
               <NewCoffeTable
                    textInputsValue={textInputsValue}
                    textInputsChangeHandler={textInputsChangeHandler}
                />
            </div>
        </div>
    </BodyContentBox>
    );
};
