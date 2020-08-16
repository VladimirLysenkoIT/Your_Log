import React from "react";

export const NewCoffeTable = ({ textInputsValue, textInputsChangeHandler }) => {
  return (
    <div className="newCoffeTable">
      <div className="existingCoffees__title">
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
          <div className='formLineBox'>
              <div className=''><label htmlFor=''>Please, add properties from the calculation per 100 grams </label></div>
          </div>
          <div className='formLineBox'>
              <div className='labelBox'><label htmlFor=''>Coffein </label></div>
              <div className='inputBox'><input type='text' name='firstName' value={textInputsValue.volume} onChange={textInputsChangeHandler}  id=''/></div>
          </div>
          <div className='formLineBox'>
              <div className='labelBox'><label htmlFor=''>Ccal</label></div>
              <div className='inputBox'><input type='text' name='firstName' value={textInputsValue.volume} onChange={textInputsChangeHandler}  id=''/></div>
          </div>
          <div className='formLineBox'>
              <div className='labelBox'><label htmlFor=''>Fat</label></div>
              <div className='inputBox'><input type='text' name='firstName' value={textInputsValue.volume} onChange={textInputsChangeHandler}  id=''/></div>
          </div>
          <div className='formLineBox'>
              <div className='labelBox'><label htmlFor=''>Carbs</label></div>
              <div className='inputBox'><input type='text' name='firstName' value={textInputsValue.volume} onChange={textInputsChangeHandler}  id=''/></div>
          </div>
          <div className='formLineBox'>
              <div className='labelBox'><label htmlFor=''>Sugar</label></div>
              <div className='inputBox'><input type='text' name='firstName' value={textInputsValue.volume} onChange={textInputsChangeHandler}  id=''/></div>
          </div>
          <div className='formLineBox'>
              <div className='labelBox'><label htmlFor=''>Proteins</label></div>
              <div className='inputBox'><input type='text' name='firstName' value={textInputsValue.volume} onChange={textInputsChangeHandler}  id=''/></div>
          </div>
          <button class="center-align waves-effect waves-light btn">
              Save new coffee
          </button>
      </form>
    </div>
  );
};
