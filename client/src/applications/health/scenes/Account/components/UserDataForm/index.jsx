import React from 'react';
import M from 'materialize-css';


export const UserDataForm = ({userData, setUserData, updateUserDataInDB}) => {
    const [isReadOnly, setIsReadOnly] = React.useState(true)
    const [isDataWasModified, setIsDataWasModified] = React.useState(false)

    React.useEffect(()=>{
        initAgeDatePicker();  
        initTrainingsNumberSelector();
    }, [userData, isReadOnly])
    
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

    const initAgeDatePicker = ()=>{
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
        let newUserDataFormValues = {...userData};
        let fieldValue = e.target.value
        const fieldName = e.target.name;

        if(fieldName === 'age'){
            const birthDateInTwoForms = convertDate(fieldValue);
            const timestamp = birthDateInTwoForms['ageTimestamp'];
            const textDate = birthDateInTwoForms['ageTextDate'];
            newUserDataFormValues['ageTimestamp'] = timestamp;
            newUserDataFormValues['birthDay'] = textDate;
            
        }else{
            newUserDataFormValues[fieldName] = fieldValue;
        }
        
        setUserData(newUserDataFormValues)
        setIsDataWasModified(true)
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

        return {ageTimestamp: timestamp, ageTextDate: day + ' ' + monthsArray[month] + ' ' + year};
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

   

    const saveButtonHandler = ()=>{
        setIsReadOnly(true)
        if(isDataWasModified){
            updateUserDataInDB()
            setIsDataWasModified(false)
        }
    }

    const editButtonHandler = ()=>{
        setIsReadOnly(false)
        initTrainingsNumberSelector()
    }

    if(userData === ''){
        
        return 'empty'
    }

    return (
        <form action='' className='usersData'>
            <div className='formContentWrapper'>
                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Prènom</label></div>
                    <div className='inputBox'><input type='text' name='firstName' value={userData.firstName} onChange={onChangeHandler}  id='' disabled={isReadOnly}/></div>
                </div>
                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Nom</label></div>
                    <div className='inputBox'><input type='text' name='lastName' value={userData.lastName} onChange={onChangeHandler} id='' disabled={isReadOnly}/></div>
                </div>
            <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Sex</label></div>
                    <div className='inputBox' >
                        <label className='sexLabel'>
                            <input name='sex' value='1' checked={userData.sex === 1} onClick={onChangeHandler} type='radio' disabled={isReadOnly} />
                            <span>Femme</span>
                        </label>
                        <label className='sexLabel'>
                            <input name='sex' value='2'  checked={userData.sex === 2} onClick={onChangeHandler} type='radio' disabled={isReadOnly}/>
                            <span>Homme</span>
                        </label>
                    </div>
                </div>
                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Date de naissance</label></div>
                    <div className='inputBox'><input type='text' name='age' value={convertDate(userData.birthDay).ageTextDate} onChange={onChangeHandler} className='datepicker' id='datePickerAge' disabled={isReadOnly}/></div>
                </div>
                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Taille</label></div>
                    <div className='inputBox'><input type='text' name='height' value={userData.height} onChange={onChangeHandler} id='' disabled={isReadOnly}/></div>
                </div>
                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Poids</label></div>
                    <div className='inputBox'><input type='text' name='weight' value={userData.weight} onChange={onChangeHandler} id='' disabled={isReadOnly}/></div>
                </div>
            <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>La cantité d'entraînements par semaine</label></div>
                    <div className='inputBox'>
                        <div className='input-field col s12'>
                            <select onChange={onChangeHandler} name='activityCoefficient' defaultValue={userData.activityCoefficient} id='trainingNumberSelector' disabled={isReadOnly}>
                                <option value={0}>Choose your option</option>
                                <option value="1.2">Je fais pas du sport</option>
                                <option value="1.375">Legère ou 1-3 entraînements par semaine</option>
                                <option value="1.55">Moyenne ou 3-5 entraînements par semaine</option>
                                <option value="1.725">Active ou 6-7 entraînements par semaine</option>
                                <option value="1.9">Athletes</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className='formLineBox'>
                <a
                    className={`${isReadOnly && 'hide'} waves-effect waves-light btn`}
                    onClick={()=>{saveButtonHandler()}}     
                >
                    Sauvegarder
                </a>
                <a
                    className={`${!isReadOnly && 'hide'} waves-effect waves-light btn`}
                    onClick={()=>{editButtonHandler()}}    
                >
                    Corriger
                </a>
            </div>
        </form>
    );
}