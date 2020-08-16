import React from "react";
import M from "materialize-css";

export const CoffeeSelector = ({setTaireVolume, coffees}) => {
    React.useEffect(()=>{
        initCoffeeSelector();
        setTaireVolume(coffees[0]['volume'])
        }, []
    )

    const initCoffeeSelector = () =>{
        const coffeeSelecor = document.getElementById('coffeeSelector');
        const coffeeSelecorElement = M.FormSelect.init(coffeeSelecor);
     }
      
    const taireSelectorOnChangeHandler = (e)=>{
        const selectedTaireId = e.target.value * 1;
        const selectedTaire = coffees.find(taire => taire.id === selectedTaireId)
        
        setTaireVolume(selectedTaire.volume)
      }

    return (
        <select id="coffeeSelector" onChange={taireSelectorOnChangeHandler}>
            {coffees.map((coffee, index)=>{
                return(
                    <option key={index} value={coffee.id}>{coffee.name} </option>
                )
            })}
        </select>
    );
};