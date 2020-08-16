import React from "react";

import "./style.scss";
import { BodyContentBox } from "../../../../components/BodyContentBox";
import { BackButton } from "../../../../../components/BackButton";
import { HeaderTitleAndBackButton } from "../../../../components/HeaderTitleAndBackButton";

export const AddTaire = () => {
    const textInputsValueInitial = {
        name: "", volume: ""
    }
    const taires = [
        {name: "Glass", volume: 250, id:1},
        {name: "Small glass", volume: 100, id:2},
        {name: "Shaker", volume: 300, id:3},
        {name: "Bottle", volume: 500, id:4},
        {name: "Bottle", volume: 1000, id:5}
      ]
    const [textInputsValue, setTextInputsValue] = React.useState(textInputsValueInitial);
    const textInputsChangeHandler = (e) =>{
        let newTextInputsValue = textInputsValue;
        newTextInputsValue[e.target.name] = e.target.value;
        
        setTextInputsValue(newTextInputsValue)
    }
    
    return (
    <BodyContentBox customClass={"addTaire"}>
        
        <div className="header">
            <HeaderTitleAndBackButton title={'Add new Tair'} />
        </div>
        <div className="row">
            <div className="col s12 l6">
               <div className="existingTaires">
                    <div className="existingTaires__title">
                       <h3>Exisitng taires</h3>
                    </div>
                    <div className="existingTaires__table">
                        {taires.map((taire, index)=>{
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
