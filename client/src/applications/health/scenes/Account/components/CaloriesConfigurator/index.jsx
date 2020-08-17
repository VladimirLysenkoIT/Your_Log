import React from 'react';
import M from 'materialize-css';

export const CaloriesConfigurator = ({userData, setCaloriesAndNutriments, caloriesRatioFormData, setCaloriesRatioFormData, updateNutritionRatioInDB}) => {
    React.useEffect(()=>{
        calculateCalories();
    },[caloriesRatioFormData])

    const [isDataWasChanged, setIsDataWasChanged] = React.useState(false)

    let validatedCaloriesRatio = {...caloriesRatioFormData};

    const onChangeHandlerCaloriesRatio = (e)=>{
        let newCaloriesRatioFormData = {...caloriesRatioFormData};
        setIsDataWasChanged(true)

        newCaloriesRatioFormData[e.target.name] = e.target.value * 1;
        setCaloriesRatioFormData(newCaloriesRatioFormData);
    }

    const onSubmitCaloriesRatioForm = (e)=>{
        e.preventDefault();
        
        const nutrientsSum = caloriesRatioFormData.carbs*1 + caloriesRatioFormData.fat*1 + caloriesRatioFormData.protein*1;

        if(nutrientsSum === 100){
            calculateCalories()

            if(isDataWasChanged){
                updateNutritionRatioInDB(caloriesRatioFormData)
                setIsDataWasChanged(false)
            }
        }else if(nutrientsSum < 100){
            M.toast({html: 'Somme de nutrients doit etre égale à 100%'})
            
        }else if(nutrientsSum > 100){
            M.toast({html: 'Essayez de ne pas dépasser 100% &#128540;'})
            setCaloriesRatioFormData(validatedCaloriesRatio);
        }

    }

    const calculateAge = (birthDay)=>{
        const today = new Date();
        const birthDate = new Date(birthDay);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }


    const calculateNutrients = (totalCalories)=>{
        let carbsPercentage = ('0.' + caloriesRatioFormData.carbs) * 1;
        let fatPercentage = ('0.' + caloriesRatioFormData.fat) * 1;
        let proteinPercentage = ('0.' + caloriesRatioFormData.protein) * 1;
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
        if (userData == '') {
            return false
        }
        
        let caloriesMinimum;
        let caloriesWithActivity;
        let caloriesToLoseWeight;
        let caloriesToGainWeight;
        let selectedNumberOfCalories;

        console.log('user data', userData);
        
        if(userData.sex === '1'){
            caloriesMinimum = 447.593 + (9.247 * userData.weight) + (3.098 * userData.height) - (4.330 * calculateAge(userData.birthDay));
        }else{
            caloriesMinimum = 88.362 + (13.397 * userData.weight) + (4.799 * userData.height) - (5.677 * calculateAge(userData.birthDay));
        }

        console.log('caloriesMinimum', caloriesMinimum);

        caloriesWithActivity = caloriesMinimum * (userData.activityCoefficient * 1);
        caloriesToLoseWeight = caloriesWithActivity * 0.8;
        caloriesToGainWeight = caloriesWithActivity * 1.2;

        switch (caloriesRatioFormData.goalCoefficient) {
            case 1:
                selectedNumberOfCalories = caloriesToLoseWeight;
            break;
            case 2:
                selectedNumberOfCalories = caloriesWithActivity;
            break;
            case 3:
                selectedNumberOfCalories = caloriesToGainWeight;
            break;
        }
        
        
        calculateNutrients(selectedNumberOfCalories);
    }
   
    if(userData === '' || caloriesRatioFormData === ''){
        return 'empty'
    }  

    console.log('caloriesRatioFormData',caloriesRatioFormData);
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

                <div className='goalInputBox' >
                        <label className='goalLabel'>
                            <input name='goalCoefficient' value={1} checked={caloriesRatioFormData.goalCoefficient === 1} onChange={onChangeHandlerCaloriesRatio} type='radio'  />
                            <span>Perdre du poids</span>
                        </label>
                        <label className='goalLabel'>
                            <input name='goalCoefficient' value={2}  checked={caloriesRatioFormData.goalCoefficient === 2} onChange={onChangeHandlerCaloriesRatio} type='radio'/>
                            <span>Maintenir le poids</span>
                        </label>
                        <label className='goalLabel'>
                            <input name='goalCoefficient' value={3}  checked={caloriesRatioFormData.goalCoefficient === 3} onChange={onChangeHandlerCaloriesRatio} type='radio'/>
                            <span>Prendre du poids</span>
                        </label>
                    </div>
            
                <button className="btn waves-effect waves-light" type="submit" name="action">
                    Calculer
                </button>
            </form>

        </div>
    );
}