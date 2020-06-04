import React from 'react';
import M from 'materialize-css';


export const UserDataForm = ({userDataFormValues, setUserDataFormValues}) => {
    React.useEffect(()=>{
        initAgeDatePicker();  
        initTrainingsNumberSelector();
    }, [])

    const yearsRange = (startNYearsAgo = 100)=>{
        let yearsRange = [];
        const date = new Date()
        const currentYear = date.getFullYear();
        const minimalYear = currentYear - startNYearsAgo;
        const maximalYear = currentYear - 14;
        
        yearsRange = [minimalYear, maximalYear]
        return yearsRange;
    }

    const getMinimalDate = ()=>{
        let currentTime = new Date();
        currentTime.setFullYear(currentTime.getFullYear() - 100);
        
        return currentTime;
    }
    const getMaximallDate = ()=>{
        let currentTime = new Date();
        currentTime.setFullYear(currentTime.getFullYear() - 14);
        
        return currentTime;
    }

    const initAgeDatePicker = async ()=>{
        const datePicker = document.getElementById('datePickerAge');
        
        M.Datepicker.init(datePicker, {
            format: 'dd mmmm yyyy ',
            yearRange: yearsRange(),
            minDate: getMinimalDate(),
            maxDate: getMaximallDate(),
            defaultDate: getMaximallDate(),
            onSelect: (newDate) => {
                onChangeHandler({
                    target: {
                        name: 'age',
                        value: newDate
                    }
                })
            }
            });
    }

    const initTrainingsNumberSelector = ()=>{
        const select = document.getElementById('trainingNumberSelector');

        M.FormSelect.init(select,{});
    } 

    const onChangeHandler = (e)=>{
        let newUserDataFormValues = {...userDataFormValues};
        let fieldValue = e.target.value
        const fieldName = e.target.name;

        if(fieldName === 'age'){
            const birthDateInTwoForms = convertDate(fieldValue);
            const timestamp = birthDateInTwoForms['ageTimestamp'];
            const textDate = birthDateInTwoForms['ageTextDate'];
            newUserDataFormValues['ageTimestamp'] = timestamp;
            newUserDataFormValues['ageTextDate'] = textDate;
            newUserDataFormValues['age'] = getAge(timestamp, textDate);
            
        }else{
            newUserDataFormValues[fieldName] = fieldValue;
        }
        
        setUserDataFormValues(newUserDataFormValues)
    }

    const convertDate = (dateString) => {     
        const  monthsArray = [];
        monthsArray[0] = "January";
        monthsArray[1] = "February";
        monthsArray[2] = "March";
        monthsArray[3] = "April";
        monthsArray[4] = "May";
        monthsArray[5] = "June";
        monthsArray[6] = "July";
        monthsArray[7] = "August";
        monthsArray[8] = "September";
        monthsArray[9] = "October";
        monthsArray[10] = "November";
        monthsArray[11] = "December"; 

        const date = new Date(dateString),
        month = date.getMonth(),
        day = ('0' + date.getDate()).slice(-2),
        year = date.getFullYear(),
        timestamp = date.getTime()

        return {ageTimestamp: timestamp, ageTextDate: day + monthsArray[month] + year};
    }

    const getAge = (ageTimestamp, ageTextDate)=>{
        const today = new Date();
        const currentYear = today.getFullYear();
        const birdthYear = ageTextDate.substr(-4) * 1;
        let age = currentYear - birdthYear;

        today.setFullYear(today.getUTCFullYear() - age);

        if(today >= ageTimestamp){
            return age
        }else{
            return age - 1;
        }
    }
    
    return (
        <form action='' className='usersData'>
            <div className='formContentWrapper'>
                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Prènom</label></div>
                    <div className='inputBox'><input type='text' name='firstName' value={userDataFormValues.firstName} onChange={onChangeHandler}  id=''/></div>
                </div>
                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Nom</label></div>
                    <div className='inputBox'><input type='text' name='lastName' value={userDataFormValues.lastName} onChange={onChangeHandler} id=''/></div>
                </div>
            <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Sex</label></div>
                    <div className='inputBox' >
                        <label className='sexLabel'>
                            <input name='sex' value='1' checked={userDataFormValues.sex === '1'} onChange={onChangeHandler} type='radio'  />
                            <span>Femme</span>
                        </label>
                        <label className='sexLabel'>
                            <input name='sex' value='2'  checked={userDataFormValues.sex === '2'} onChange={onChangeHandler} type='radio'/>
                            <span>Homme</span>
                        </label>
                    </div>
                </div>
                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Date de naissance</label></div>
                    <div className='inputBox'><input type='text' name='age' value={userDataFormValues.ageTextDate} onChange={onChangeHandler} className='datepicker' id='datePickerAge'/></div>
                </div>
                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Taille</label></div>
                    <div className='inputBox'><input type='text' name='height' value={userDataFormValues.height} onChange={onChangeHandler} id=''/></div>
                </div>
                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Poids</label></div>
                    <div className='inputBox'><input type='text' name='weight' value={userDataFormValues.weight} onChange={onChangeHandler} id=''/></div>
                </div>
            <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>La cantité d'entraînements par semaine</label></div>
                    <div className='inputBox'>
                        <div className='input-field col s12'>
                            <select onChange={onChangeHandler} value={userDataFormValues.trainingsNumber} id='trainingNumberSelector' >
                                <option value='' >Choose your option</option>
                                <option value='1,2'>Je fais pas du sport</option>
                                <option value='1.375'>Legère ou 1-3 entraînements par semaine</option>
                                <option value='1.55'>Moyenne ou 3-5 entraînements par semaine</option>
                                <option value='1.725'>Active ou 6-7 entraînements par semaine</option>
                                <option value='1.9'>Athletes</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}