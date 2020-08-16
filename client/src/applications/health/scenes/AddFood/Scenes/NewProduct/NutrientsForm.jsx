import React from 'react';
import M from 'materialize-css';


export const NutrientsForm = ({}) => {
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
        <form action='' className='nutrientsForm'>
            <div className='formContentWrapper'>
                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Titre</label></div>
                    <div className='inputBox'><input type='text' name='firstName' value={1234} onChange={onChangeHandler}  id=''/></div>
                </div>
                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Categories</label></div>
                    <div className='inputBox'>
                        <div className='input-field col s12'>
                            <select onChange={onChangeHandler} value={1.9} id='trainingNumberSelector' >
                                <option value='' >Choose your option</option>
                                <option value='1'>Fruit</option>
                                <option value='2'>Legumes</option>
                                <option value='3'>Sugar</option>
                                <option value='4'>Protein</option>
                                <option value='5'>Autre</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Calories</label></div>
                    <div className='inputBox'><input type='text' name='firstName' value={1234} onChange={onChangeHandler}  id=''/></div>
                </div>

                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Proteines</label></div>
                    <div className='inputBox'><input type='text' name='firstName' value={1234} onChange={onChangeHandler}  id=''/></div>
                </div>

                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Glucides totales:</label></div>
                    <div className='inputBox'><input type='text' name='firstName' value={1234} onChange={onChangeHandler}  id=''/></div>

                    <div className="nutrimentDetails">
                        <label>Dont:</label>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Fibres alimentaires:</label></div>
                            <div className='inputBox'><input type='text' name='firstName' value={1234} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Sucres:</label></div>
                            <div className='inputBox'><input type='text' name='firstName' value={1234} onChange={onChangeHandler}  id=''/></div>
                        </div>
                    </div>
                </div>
                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Lipides totales:</label></div>
                    <div className='inputBox'><input type='text' name='firstName' value={1234} onChange={onChangeHandler}  id=''/></div>

                    <div className="nutrimentDetails">
                        <label>Dont:</label>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Saturés:</label></div>
                            <div className='inputBox'><input type='text' name='firstName' value={1234} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Poly-insaturés:</label></div>
                            <div className='inputBox'><input type='text' name='firstName' value={1234} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Mono-insaturés:</label></div>
                            <div className='inputBox'><input type='text' name='firstName' value={1234} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Cholestérol:</label></div>
                            <div className='inputBox'><input type='text' name='firstName' value={1234} onChange={onChangeHandler}  id=''/></div>
                        </div>
                    </div>
                </div>
                <div className='formLineBox'>
                    <div className='labelBox viaminsLabel'><label htmlFor=''>Vitamins & Minerals:</label></div>
                    <div className='inputBox'></div>

                    <div className="nutrimentDetails">
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Sodium:</label></div>
                            <div className='inputBox'><input type='text' name='firstName' value={1234} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Potassium:</label></div>
                            <div className='inputBox'><input type='text' name='firstName' value={1234} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Magnesium:</label></div>
                            <div className='inputBox'><input type='text' name='firstName' value={1234} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Calcium:</label></div>
                            <div className='inputBox'><input type='text' name='firstName' value={1234} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Fer:</label></div>
                            <div className='inputBox'><input type='text' name='firstName' value={1234} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Vitamin A:</label></div>
                            <div className='inputBox'><input type='text' name='firstName' value={1234} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Vitamin C:</label></div>
                            <div className='inputBox'><input type='text' name='firstName' value={1234} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Vitamin B6:</label></div>
                            <div className='inputBox'><input type='text' name='firstName' value={1234} onChange={onChangeHandler}  id=''/></div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}