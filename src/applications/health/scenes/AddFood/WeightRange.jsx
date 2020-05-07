import React from "react";

export const WeightRange = () => {
  const [weight, setWeight] = React.useState(100);
  const rangeOnchange = (e) => {
    const newWeight = e.target.value;
    setWeight(newWeight)
  }
  let isButtonDown = false;
  let incrementWeightInterwal;

  const addWeight = () => {
    const newWeight = (weight * 1 ) + 1;
    setWeight(newWeight)
  }

  const minusWeight = () => {
    const newWeight = (weight * 1 ) - 1;
    setWeight(newWeight)
  }

  const onMouseUpHandler = () => {
    clearInterval(incrementWeightInterwal)
  }

  const onMouseDownHandler = () => {
    console.log(1);
    setTimeout(function(){ 
      alert(12);
      incrementWeightInterwal = setInterval(function(){ console.log(1) }, 2000);
    }, 1000);
  }

  

  return (
    <div className="weightRange">
        <form action="">
          <button onClick={minusWeight} onMouseUp={onMouseUpHandler} onMouseDown={onMouseDownHandler} className="back" type="button"><i className="material-icons">navigate_before</i></button>
            <input type='text' name='fat' value={weight} onChange={rangeOnchange} />
          <button onClick={addWeight} onMouseUp={onMouseUpHandler} onMouseDown={onMouseDownHandler} className={`forward `} type="button"><i className="material-icons">navigate_next</i></button>
        </form>
    </div>
  );
};
