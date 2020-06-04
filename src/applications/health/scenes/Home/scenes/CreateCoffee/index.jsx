import React from "react";

import "./style.scss";
import { BodyContentBox } from "../../../../components/BodyContentBox";
import { BackButton } from "../../../../../components/BackButton";
import { HeaderTitleAndBackButton } from "../../../../components/HeaderTitleAndBackButton";

export const CreateCoffee = () => {
    const textInputsValueInitial = {
        name: "", volume: ""
    }
    const coffees = [
        {name: "Espresso", volume: 250, cofein: 0.25, calories: 70, carbs: 5, sugar: 4, fat:1, prtein:0.7, id:1},
        {name: "Cappuccino", volume: 100, cofein: 0.25, calories: 70, carbs: 5, sugar: 4, fat:1, prtein:0.7, id:2},
        {name: "Latte", volume: 300, cofein: 0.25, calories: 70, carbs: 5, sugar: 4, fat:1, prtein:0.7, id:3},
        {name: "Arabica", volume: 500, cofein: 0.25, calories: 70, carbs: 5, sugar: 4, fat:1, prtein:0.7, id:4}
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
               <div className="existingTaires">
                    <div className="existingTaires__title">
                       <h3>Exisitng coffees</h3>
                    </div>
                    <div className="existingTaires__table">
                        {coffees.map((taire, index)=>{
                            return(
                                <div key={index} className="line">
                                    <div className="name">{taire.name}</div>
                                    <div className="value">{taire.volume} ml</div>
                                </div>
                            )
                        })}
                    </div>
               </div>
              
            </div>
            <div className="col s12 l6">
                <div className="existingTaires__title">
                    <h3>Create a new</h3>
                </div>
                <form action="">
                    <div className='formLineBox'>
                        <div className='labelBox'><label htmlFor=''>Name</label></div>
                        <div className='inputBox'><input type='text' name='firstName' value={textInputsValue.name} onChange={textInputsChangeHandler}  id=''/></div>
                    </div>
                    <div className='formLineBox'>
                        <div className='labelBox'><label htmlFor=''>Volume</label></div>
                        <div className='inputBox'><input type='text' name='firstName' value={textInputsValue.volume} onChange={textInputsChangeHandler}  id=''/></div>
                    </div>
                    <button class="center-align waves-effect waves-light btn">
                        Add a new product
                    </button>
                </form>
            </div>
        </div>
    </BodyContentBox>
    );
};
