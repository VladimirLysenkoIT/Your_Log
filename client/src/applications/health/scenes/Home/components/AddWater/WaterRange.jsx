import React from "react";
import M from 'materialize-css';

export const WaterRange = () => {
  const [glasesNumber, setGlasesNumber] = React.useState(1);
  const [intakedWater, setIntakedWater] = React.useState(0);
  const [taireVolume, setTaireVolume] = React.useState(250);

  const taires = [
    {name: "Glass", volume: 250, id:1},
    {name: "Small glass", volume: 100, id:2},
    {name: "Shaker", volume: 300, id:3},
    {name: "Bottle", volume: 500, id:4},
    {name: "Bottle", volume: 1000, id:5}
  ]

  React.useEffect(()=>{
    const allIntaked = intakedWater + taireVolume;
    setIntakedWater(allIntaked);
    }, [glasesNumber]
  )

  React.useEffect(()=>{
    initTaireSelector();
    setTaireVolume(taires[0]['volume'])
    }, []
  )

  const initTaireSelector = () =>{
     const taireSelecor = document.getElementById('taireSelector');
     const taireSelecorElement = M.FormSelect.init(taireSelecor);
  }
  
  const textFieldOnChangeHandler = (e) => {
    const newWeight = e.target.value;
    setGlasesNumber(newWeight);
  }
  
  const addWeight = () => {
    let newWeight = glasesNumber + 1;
    setGlasesNumber(newWeight)
  }

  const minusWeight = () => {
    let newWeight = glasesNumber*1 - 1;
    setGlasesNumber(newWeight)
  }

  const taireSelectorOnChangeHandler = (e)=>{
    const selectedTaireId = e.target.value * 1;
    const selectedTaire = taires.find(taire => taire.id === selectedTaireId)
    
    setTaireVolume(selectedTaire.volume)
  }

  return (
    <div className="waterRange">
      <div className="range">
        <button 
          onClick={minusWeight}
          className="back"
          type="button"
          >-</button>
          <div className="glasesNumberDisplayer">
              {glasesNumber}<span> x </span><i className="material-icons">local_drink</i>
              <div className="taireSelectorWrapper">
                <select id="taireSelector" onChange={taireSelectorOnChangeHandler}>
                  {taires.map((taire, index)=>{
                    return(
                     <option key={index} value={taire.id}>{taire.name} ({taire.volume} ml)</option>
                    )
                  })}
                </select>
              </div>
          </div>
          <button
          onClick={addWeight}
          className={`forward`}
          type="button"
          >+</button>
      </div>
      <div className="description">
        <p>
          {intakedWater} ml
        </p>
      </div>

          
        
    </div>
  );
};