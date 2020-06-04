import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { MoreDetails } from "../../../../../components/MoreDetails";
import { CoffeeSelector } from "./CoffeeSelector";
import { CoffeeNumberDisplayer } from "./CoffeeNumberDisplayer";
import { CoffeeShortStats } from "./CoffeeShortStats";

export const AddCoffee = () => {
  const coffees = [
    {name: "Espresso", volume: 250, id:1},
    {name: "Cappuccino", volume: 100, id:2},
    {name: "Latte", volume: 300, id:3},
    {name: "Arabica", volume: 500, id:4}
  ]
  const [taireVolume, setTaireVolume] = React.useState(250);
  const [glasesNumber, setGlasesNumber] = React.useState(1);
  const [intakedWater, setIntakedWater] = React.useState(0);

  const addCup = () => {
    let newWeight = glasesNumber + 1;
    setGlasesNumber(newWeight)
  }
  return (
    <div className="addCoffee">
        <div className="title">
            <span>Combien du caffé vous avez bu ?</span>
        </div>
        <div className="mainContent">
          <div className="firstLine">
            <div className="coffeeSelectorWrapper">
              <CoffeeSelector
                coffees={coffees}
                setTaireVolume={setTaireVolume}
              />
            </div>
            <div className="addButtonBlock">
              <span onClick={addCup}>Add a cup</span>
            </div>
            <div className="createNewCoffeeBlock">
              <Link  to="/health/createcoffee" className="createNew center-align waves-effect waves-light btn">
                Create new
              </Link>
            </div>
          </div>
          <div className="secondLine">
            <CoffeeNumberDisplayer 
              glasesNumber={glasesNumber}
            />
            <CoffeeShortStats />
          </div>
        </div>
        <div className="buttonsBox">
          <MoreDetails title={'Regarder les details'} />
        </div>
    </div>
  );
};
