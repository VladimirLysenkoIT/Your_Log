import React from 'react';
import M from 'materialize-css';

export const CaloriesConfigurator = ({userDataFormValues, setCaloriesAndNutriments}) => {
    const [caloriesGoalFormData, setCaloriessGoalFormData] = React.useState('2');
    React.useEffect(()=>{
        calculateCalories();
    },[caloriesGoalFormData])

    const initialCaloriesRatio = {
        carbs: "40",
        fat: "25",
        protein: "35"
    };
    let validatedCaloriesRatio = {...initialCaloriesRatio};
    const [caloriesRatioFormData, setCaloriesRatioFormData] = React.useState(initialCaloriesRatio);

    
    const onChangeHandlerCaloriesGoal = (e)=>{
        setCaloriessGoalFormData(e.target.value);
    }


    const onChangeHandlerCaloriesRatio = (e)=>{
        let newCaloriesRatioFormData = {...caloriesRatioFormData};

        newCaloriesRatioFormData[e.target.name] = e.target.value;
        setCaloriesRatioFormData(newCaloriesRatioFormData);
    }

    const onSubmitCaloriesRatioForm = (e)=>{
        e.preventDefault();
        
        const nutrientsSum = caloriesRatioFormData.carbs*1 + caloriesRatioFormData.fat*1 + caloriesRatioFormData.protein*1;

        if(nutrientsSum === '100'){
            
        }else if(nutrientsSum < 100){
            M.toast({html: 'Somme de nutrients doit etre égale à 100%'})
            
        }else if(nutrientsSum > 100){
            M.toast({html: 'Essayez de ne pas dépasser 100% &#128540;'})
            setCaloriesRatioFormData(validatedCaloriesRatio);
        }

    }


    const calculateNutrients = (totalCalories)=>{
        let carbsPercentage = ('0.' + initialCaloriesRatio.carbs) * 1;
        let fatPercentage = ('0.' + initialCaloriesRatio.fat) * 1;
        let proteinPercentage = ('0.' + initialCaloriesRatio.protein) * 1;
        let carbs;
        let fat;
        let protein;

        carbs = Math.round(totalCalories * carbsPercentage / 4);
        fat = Math.round(totalCalories * fatPercentage / 9);
        protein = Math.round(totalCalories * proteinPercentage / 4);
        totalCalories = Math.round(totalCalories);
        
        console.log(totalCalories);
        setCaloriesAndNutriments({totalCalories, carbs, fat, protein})
    }

    const calculateCalories = ()=>{
        let caloriesMinimum;
        let caloriesWithActivity;
        let caloriesToLoseWeight;
        let caloriesToGainWeight;
        let selectedNumberOfCalories;
        
        if(userDataFormValues.sex === '1'){
            caloriesMinimum = 447.593 + (9.247 * userDataFormValues.weight) + (3.098 * userDataFormValues.height) - (4.330 * userDataFormValues.age);
        }else{
            caloriesMinimum = 88.362 + (13.397 * userDataFormValues.weight) + (4.799 * userDataFormValues.height) - (5.677 * userDataFormValues.age);
        }

        caloriesWithActivity = caloriesMinimum * (userDataFormValues.trainingsNumber * 1);
        caloriesToLoseWeight = caloriesWithActivity * 0.8;
        caloriesToGainWeight = caloriesWithActivity * 1.2;

        switch (caloriesGoalFormData) {
            case '1':
                selectedNumberOfCalories = caloriesToLoseWeight;
            break;
            case '2':
                selectedNumberOfCalories = caloriesWithActivity;
            break;
            case '3':
                selectedNumberOfCalories = caloriesToGainWeight;
            break;
        }
        
        console.log(selectedNumberOfCalories);
        
        calculateNutrients(selectedNumberOfCalories);
    }
   

    
    
    return (
        <div className="caloriesDisplayer">
            <form action="" className="caloriesRatio" onSubmit={onSubmitCaloriesRatioForm}>
                <div className='numericInputBox'>
                    <div className='labelBox'><label htmlFor=''>Glucides %</label></div>
                    <div className='inputBox'><input type='number' name='carbs' min="0" max="100" step="1" id='carbsInput' value={caloriesRatioFormData.carbs} onChange={onChangeHandlerCaloriesRatio} /></div>
                </div>
                <div className='numericInputBox'>
                    <div className='labelBox'><label htmlFor=''>Gras %</label></div>
                    <div className='inputBox'><input type='number' name='fat' min="0" max="100" step="1" id='fatsInput' value={caloriesRatioFormData.fat} onChange={onChangeHandlerCaloriesRatio} /></div>
                </div>
                <div className='numericInputBox'>
                    <div className='labelBox'><label htmlFor=''>Protéines %</label></div>
                    <div className='inputBox'><input type='number' name='protein' min="0" max="100" step="1" id='proteinsInput' value={caloriesRatioFormData.protein}  onChange={onChangeHandlerCaloriesRatio} /></div>
                </div>
            
                <button className="btn waves-effect waves-light" type="submit" name="action">Calculer
                </button>
            </form>

            <form action="" className="caloriesGoal">
            <div className='labelBox'><label htmlFor=''>Votre but:</label></div>
                    <div className='inputBox' >
                        <label className='sexLabel'>
                            <input name='sex' value='1' checked={caloriesGoalFormData === '1'} onChange={onChangeHandlerCaloriesGoal} type='radio'  />
                            <span>Perdre du poids</span>
                        </label>
                        <label className='sexLabel'>
                            <input name='sex' value='2'  checked={caloriesGoalFormData === '2'} onChange={onChangeHandlerCaloriesGoal} type='radio'/>
                            <span>Maintenir le poids</span>
                        </label>
                        <label className='sexLabel'>
                            <input name='sex' value='3'  checked={caloriesGoalFormData === '3'} onChange={onChangeHandlerCaloriesGoal} type='radio'/>
                            <span>Prendre du poids</span>
                        </label>
                    </div>
            </form>
        </div>
    );
}