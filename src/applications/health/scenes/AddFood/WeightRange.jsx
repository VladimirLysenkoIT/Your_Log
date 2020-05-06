import React from "react";

export const WeightRange = () => {
    const [weight, setWeight] = React.useState(100);
   const rangeOnchange = (e) => {
    const newWeight = e.target.value;
    setWeight(newWeight)
  }

  return (
    <div className="weightRange">
        <form action="">
            <p class="range-field">
            <div className='numericInputBox'>
                    <div className='labelBox'><label htmlFor=''>Poids (gr)</label></div>
                    <div className='inputBox'>
                        <input type='text' name='fat' value={weight} onChange={rangeOnchange} />
                    </div>
            </div>
            
            </p>
        </form>
    </div>
  );
};
