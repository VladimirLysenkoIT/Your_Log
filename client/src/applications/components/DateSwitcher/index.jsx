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

    const [textDate, setTextDate] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState();
    const [isForwardDateDisabled, setIsForwardDateDisabled] = React.useState(false);
    React.useEffect(()=>{
        initDatePicker();
        initDateSwitcherData();
    }, [])

    React.useEffect(()=>{
        maxDateSelected();

        // dataSetter(selectedDate);
    }, [selectedDate])
    

    const refreshSwitcherTextDate = (date) => {
        const switcherDate = dateToText(date);
       
        setTextDate(switcherDate)
    }

    const dateToText = (date) => {
        let dateToFormat = date;
        let formattedDate = dateToFormat.getDate() + '.' + monthsArray[dateToFormat.getMonth()];
        
        return formattedDate;
    }

    const maxDateSelected = () => {
        let newSelectedDate = new Date(selectedDate);
        newSelectedDate.setDate(newSelectedDate.getDate() + 1)
        newSelectedDate.setHours(0,0,0,0)
        
        const maxDate = getMaximallDate();
        if (newSelectedDate <= maxDate) {
            setIsForwardDateDisabled(false)
        }else{
            setIsForwardDateDisabled(true)
        }
    }

    const initDateSwitcherData = () => {
        let currentTime = new Date();

        refreshSwitcherTextDate(currentTime);
        setSelectedDate(currentTime);
    }

    const getMaximallDate = ()=>{
        let currentTime = new Date();
        currentTime.setDate(currentTime.getDate() + 2)
        currentTime.setHours(0,0,0,0)

        return currentTime;
    }

    const forwardDate = ()=>{
        let newSelectedDate = new Date(selectedDate);
        newSelectedDate.setDate(newSelectedDate.getDate() + 1)
        newSelectedDate.setHours(0,0,0,0)
        
        const maxDate = getMaximallDate();
        if (newSelectedDate <= maxDate) {
            refreshSwitcherTextDate(newSelectedDate);
            setSelectedDate(newSelectedDate);
        }else{
            M.toast({html: 'Essayez de ne pas dépasser la date maximale &#128540;'});
        }
    }

    const backDate = ()=>{
        let newSelectedDate = new Date(selectedDate);
        newSelectedDate.setDate(newSelectedDate.getDate() - 1);

        refreshSwitcherTextDate(newSelectedDate);
        setSelectedDate(newSelectedDate)
    }

    const initDatePicker =  ()=>{
        const datePicker = document.getElementById('datePicker');
        
        M.Datepicker.init(datePicker, {
            format: 'd.mmmm',
            defaultDate: new Date(),
            maxDate: getMaximallDate(),
            onSelect: (newDate) => {
                datePicker_onSelectHandler({
                    target: {
                        name: 'selectedDate',
                        value: newDate
                    }
                })
            }
            });
    }

    const datePicker_onSelectHandler = (e) => {
        let newSelectedDate = new Date(e.target.value);
        
        refreshSwitcherTextDate(newSelectedDate);
        setSelectedDate(newSelectedDate)
    }

    return (
        <div className="dateSwitcher">
            <form action="">
                <button onClick={backDate} className="back" type="button"><i className="material-icons">navigate_before</i></button>
                    <input type='text' className="display" name='date' value={textDate} onChange={datePicker_onSelectHandler} id='datePicker'/>
                <button onClick={forwardDate} className={`forward ${isForwardDateDisabled ? 'disabled' : ''}`} type="button"><i className="material-icons">navigate_next</i></button>
            </form>
        </div>
    );
};
