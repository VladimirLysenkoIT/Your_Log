import React from "react";

import { BodyContentBox } from "../../components/BodyContentBox/index.jsx";

import "./style.scss";

import { DBContext } from "../../Services/context/DBContext";
import { ProductsDetail } from "./ProductsDetail";
import { ProductsList } from "./ProductList";
import { Link, useRouteMatch} from "react-router-dom";
import { DateSwitcher } from "../../../components/DateSwitcher";
import { CaloriesDisplayer } from "../../components/CaloriesDisplayer";
import { Graph } from "../../components/NutrientsDisplayer/Graph";
import { HeaderTitleAndBackButton } from "../../components/HeaderTitleAndBackButton";
import { useHttp } from "../../../../hooks/http.hook.js";
import { AuthContext } from "../../../../context/Auth.context";

export const AddFood = () => {
  const product =  {
    "id": "1",
    "name": "Banana",
    "type": "fruit",
    "category": "carbs",
    "nutritionFacts": {
      "calories": "89",
      "lipides": {
        "total": "0.3",
        "saturated": "0.1",
        "monounsaturated": "0.1",
        "polyunsaturated": "0.1"
      },
      "cholesterol": "0",
      "sodium": "1",
      "potassium": "358",
      "carbs": {
        "total": "23",
        "fibres": "2.6",
        "sucres": "12"
      },
      "proteines": "1.1",
      "vitamin_A": "64",
      "calcium": "5",
      "vitamin_C": "8.7",
      "fer": "0.3",
      "vitamin_B6": "0.4",
      "magnesium": "27"
    }
  };
  const [currentProduct, setCurrentProduct] = React.useState(product);
  const [weightCoefficient, setWeightCoefficient] = React.useState(1);
  const {loading, request} = useHttp()
  const {token} = React.useContext(AuthContext)

  const context = React.useContext(DBContext);
  const products = context.DB.parts.caloriesPart.products;
  const match = useRouteMatch();
  
  const eatTime = match.params.eattime;
  const language = 'fr';

  const traductions = [
    {
      fr:{
        title:'Petit déjeuner',
        url: 'petitdejeuner',
        id: 0
      }
    },
    {
      fr:{
        title:'Déjeuner',
        url: 'dejeuner',
        id: 1
      }
    },
    {
      fr:{
        title:'Dîner',
        url: 'diner',
        id: 2
      }
    },
    {
      fr:{
        title:'Collation Matinale',
        url: 'collationmatinale',
        id: 3
      }
    },
    {
      fr:{
        title:'Goûter',
        url: 'gouter',
        id: 4
      }
    },
    {
      fr:{
        title:'Collation',
        url: 'collation',
        id: 5
      }
    }
  ];

  const getDataForAutocomplete = async (nutrimentsRatio)=> {
    try {
      const data = await request('/api/nutrientsRatio/update', 'POST', {...nutrimentsRatio},{
        authorization: `Bearer ${token}`
      })

      if(data.ok){
        console.log('ok')
      }
    } catch (error) {}
  }

  return (
    <BodyContentBox customClass={"addFood"}>
      <div className="row">
        <div className="col m12">
        <div className="addFoodHeader">
          <HeaderTitleAndBackButton title={traductions[eatTime][language].title} />
          <div className="dateSwitcherWrapper">
            <DateSwitcher />
          </div>
          <div className="caloriesDisplayerWrapper">
            <div className="col m6">
              <span>Total: </span><CaloriesDisplayer /> <Graph calories={2094} protein={291.2} carbs={112} fat={33.6} />
            </div>
            <div className="col m6 currentBreakfast">
              <span>{traductions[eatTime][language].title} : </span> <CaloriesDisplayer /> <Graph calories={1094} protein={91.2} carbs={82} fat={43.6} />
            </div>
          </div>
        </div>
        </div>
        <div className="col s12 l6">
          <ProductsDetail
            currentProduct={currentProduct}
            weightCoefficient={weightCoefficient}
            setWeightCoefficient={setWeightCoefficient}
          />
        </div>
        <div className="col s12 l6">
          <ProductsList
            products={products}
            setCurrentProduct={setCurrentProduct}
            setWeightCoefficient={setWeightCoefficient}
          />
          <div className="newProductLinkWrapper center-align">
            <Link to="/health/addfood/newProduct" className="center-align waves-effect waves-light btn">
              Add a new product
            </Link>
          </div>
        </div>
      </div>
    </BodyContentBox>
  );
};
