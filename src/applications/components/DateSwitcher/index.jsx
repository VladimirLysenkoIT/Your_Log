import React from "react";
import "./style.scss";

export const DateSwitcher = ({dataSetter}) => {
    React.useEffect(()=>{
        initAgeDatePicker();  
        initTrainingsNumberSelector();
    }, [])

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
  return (
    <div className="dateSwitcher">
        <form action="">
            <input type='text' name='age' value={userDataFormValues.ageTextDate} onChange={onChangeHandler} className='datepicker' id='datePickerAge'/>
        </form>
    </div>
  );
};
