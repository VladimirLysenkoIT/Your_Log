import React from 'react';
import {Header} from '../../components/header/index';
import { BodyContentBox } from '../../components/bodyContentBox';
import { UserDataForm } from './UserDataForm';
import { CaloriesDisplayer } from './CaloriesDisplayer';

import './style.scss';
import { CaloriesConfigurator } from './CaloriesConfigurator';


export const Account = () => {
    // let initialFormState = {
    //     firstName: '',
    //     lastName: '',
    //     sex:'',
    //     age:'',
    //     ageTimestamp:'',
    //     ageTextDate:'',
    //     height:'',
    //     weight:'',
    //     trainingsNumber:''
    // };

    let initialFormState = {
        firstName: 'Vladimir',
        lastName: 'Lysenko',
        sex:'2',
        age:'24',
        ageTimestamp:'811375200000',
        ageTextDate:'18 September 1995',
        height:'164',
        weight:'65',
        trainingsNumber:'1.725'
    };
    const [userDataFormValues, setUserDataFormValues] = React.useState(initialFormState);
    const [caloriesAndNutriments, setCaloriesAndNutriments] = React.useState({totalCalories:'', carbs:'', fat:'', protein:''});
    console.log(caloriesAndNutriments);
    
    return (
        <div>
            <Header />
            <BodyContentBox customClass={'account'}>
                <div className="row">
                    <div className="col s12 l6">
                        <UserDataForm 
                            userDataFormValues={userDataFormValues} setUserDataFormValues={setUserDataFormValues} />
                    </div>
                    <div className="col s12 l6">
                        <CaloriesConfigurator
                            userDataFormValues={userDataFormValues}
                            setCaloriesAndNutriments={setCaloriesAndNutriments}
                         />
                        <CaloriesDisplayer
                            caloriesAndNutriments={caloriesAndNutriments}
                        />
                    </div>
                </div>
            </BodyContentBox>
        </div>
    );
}