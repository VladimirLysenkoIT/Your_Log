import React from "react";
import M from 'materialize-css';

import "./style.scss";

export const DateSwitcher = ({dataSetter}) => {
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

    const [textDate, setTextDate] = React.useState();
    const [selectedDate, setSelectedDate] = React.useState();
    React.useEffect(()=>{
        initDatePicker();
        initDateSwitcherData();
    }, [])

    const refreshSwitcherTextDate = (date) => {
        const switcherDate = dateToText(date);
       
        setTextDate(switcherDate)
    }

    const dateToText = (date) => {
        let dateToFormat = date;
        let formattedDate = dateToFormat.getDate() + '.' + monthsArray[dateToFormat.getMonth()];
        
        return formattedDate;
    }

    const initDateSwitcherData = () => {
        let currentTime = new Date();

        refreshSwitcherTextDate(currentTime);
        setSelectedDate(currentTime);
    }

    const getMaximallDate = ()=>{
        let currentTime = new Date();
        currentTime.setDate(currentTime.getDate() + 2)
        
        return currentTime;
    }

    const forwardDate = ()=>{
        let date = selectedDate;
        date.setDate(date.getDate() + 1)
        
        setSelectedDate(date)
    }

    const backDate = ()=>{
        let date = selectedDate;

        date.setDate(date.getDate() - 1)
        
        setSelectedDate(date)
    }

    const initDatePicker = async ()=>{
        const datePicker = document.getElementById('datePicker');
        
        M.Datepicker.init(datePicker, {
            format: 'd.mmmm',
            defaultDate: new Date(),
            maxDate: getMaximallDate(),
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
        let newTextDate = {...textDate};
        let fieldValue = e.target.value
        const fieldName = e.target.name;
        
        setTextDate(newTextDate)
    }
  return (
    <div className="dateSwitcher">
        <form action="">
            <button onClick="forwardDate()" className="back" type="button"><i className="material-icons">navigate_before</i></button>
                <input type='text' className="display" name='date' value={textDate} onChange={onChangeHandler} id='datePicker'/>
            <button onClick="backDate()" className="forward" type="button"><i className="material-icons">navigate_next</i></button>
        </form>
    </div>
  );
};
