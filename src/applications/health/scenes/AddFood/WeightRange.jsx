import React from "react";

export const WeightRange = ({ setWeightCoefficient }) => {
  const [weight, setWeight] = React.useState(100);
  const [intervalId, setIntervalId] = React.useState(false);
  const interval = 100;
  let longPressNewWeight = weight;

  React.useEffect(()=>{
    const weightCoefficient = weight / 100;
    setWeightCoefficient(weightCoefficient)

    longPressNewWeight = weight
    }, [weight]
  )

  const textFieldOnChangeHandler = (e) => {
    const newWeight = e.target.value;
    setWeight(newWeight);
  }
  
  const addWeight = () => {
    let newWeight = weight + 1;
    
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

  

  const minusWeight = () => {
    let newWeight = weight*1 - 1;
    setWeight(newWeight)
  }

  const longAddPressHandler = () => {
    setIntervalId(setInterval(() => {
      longPressNewWeight += 1;
    setWeight(longPressNewWeight)

      }, interval))
  }

  const longMinusPressHandler = () => {
    setIntervalId(setInterval(() => {
      longPressNewWeight -= 1;
    setWeight(longPressNewWeight)

      }, interval))
  }

  const buttonUpHandler = () => {
    clearInterval(intervalId);
  }

  return (
    <div className="weightRange">
        <form action="">
          <button onClick={minusWeight} onMouseDown={longMinusPressHandler} onMouseUp={buttonUpHandler} className="back" type="button"><i className="material-icons">navigate_before</i></button>
            <input type='text' name='fat' value={weight + 'gr'} onChange={textFieldOnChangeHandler} />
          <button onClick={addWeight} onMouseDown={longAddPressHandler} onMouseUp={buttonUpHandler} className={`forward`} type="button"><i className="material-icons">navigate_next</i></button>
        </form>
    </div>
  );
};
