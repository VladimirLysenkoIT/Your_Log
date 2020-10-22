import React from 'react'
import M from 'materialize-css';
import './style.scss'

import {useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/Auth.context'


export const Registration = ()=>{
    const auth = React.useContext(AuthContext)
    const message = useMessage()
    const { loading, request, error, clearError} = useHttp()
    const initailFormState = {
        firstName:'',
        lastName:'',
        birthDay: "",
        sex: '1',
        email: '',
        password: ''
    }

    const [form, setForm] = React.useState(initailFormState)

    React.useEffect(()=>{
        initAgeDatePicker(); 
    }, [form])

    React.useEffect(()=>{
        message(error)
        clearError()
    }, [error, message, clearError])

    // React.useEffect(()=>{
    //     message(error)
    //     clearError()
    // }, [error, message, clearError])

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
            setDefaultDate: form.birthDay,
            onSelect: (newDate) => {
                // const selectedDate = new Date(newDate)
                // const timeOffset = selectedDate.getTimezoneOffset()
                // let timestamp;
                // if(timeOffset > 0){
                //     timestamp = selectedDate.getTime() - timeOffset * 60 * 1000
                // }else{
                //     timestamp = selectedDate.getTime() + timeOffset * -60 * 1000
                // }
                console.log('timestamp', timestamp);

                const selectedDate = new Date(newDate)
                const timestamp = selectedDate.getTime()

                onChangeHandler({
                    target: {
                        name: 'birthDay',
                        value: timestamp
                    }
                })
            }
        })
    }

    const onChangeHandler = e => {
        setForm({...form,[e.target.name]:e.target.value})
        
        // console.log(form);
    }

    const registerHandler = async () => {
        try {
            // console.log('registr')
            // console.log(form);
            
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)

            if(data.ok){
                loginHandler()
            }
            
        } catch (error) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            // console.log('data', data);
            auth.login(data.token, data.userId)
            // console.log('data', data);
        } catch (error) {}
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Registration</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Registration</span>
                        <div>
                        <div className="input-field">
                            <input
                                placeholder="Type your First Name"
                                id="firstName"
                                type="text"
                                name="firstName"
                                className="yellow-input"
                                onChange={onChangeHandler}
                            />
                            <label htmlFor="firstName">Firstname</label>
                        </div>
                        <div className="input-field">
                            <input
                                placeholder="Type your Last Name"
                                id="lastName"
                                type="text"
                                name="lastName"
                                className="yellow-input"
                                onChange={onChangeHandler}
                            />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <div className='input-field'>
                            <input type='text' name='age' className='datepicker' id='datePickerAge'/>
                            <label htmlFor=''>Age</label>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Sex</label></div>
                            <div className='inputBox' >
                                <label className='sexLabel'>
                                    <input name='sex' value='1' checked={form.sex === '1'} onChange={onChangeHandler} type='radio'  />
                                    <span>Femme</span>
                                </label>
                                <label className='sexLabel'>
                                    <input name='sex' value='2'  checked={form.sex === '2'} onChange={onChangeHandler} type='radio'/>
                                    <span>Homme</span>
                                </label>
                            </div>
                        </div>
                        <div className="input-field">
                            <input
                                placeholder="Type your email"
                                id="email"
                                type="text"
                                name="email"
                                className="yellow-input"
                                onChange={onChangeHandler}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input
                                placeholder="Placeholder"
                                id="first_name"
                                type="text"
                                name="password"
                                className="yellow-input"
                                onChange={onChangeHandler}
                            />
                            <label htmlFor="first_name">Password</label>
                        </div>
                    </div>
                    </div>
                   
                    <div className="card-action">
                        <button
                            className="btn yellow darken-4"
                            // disabled={loading}
                            onClick={loginHandler}
                        >
                            Login
                        </button>
                       <button
                        className="btn grey lighten-1 black-text"
                        style={{marginLeft:10}}
                        onClick={registerHandler}
                        // disabled={loading}
                        >
                            Registration
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}