import React from 'react'
import './style.scss'

import {useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/Auth.context'


export const Authentification = ()=>{
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
        message(error)
        clearError()
    }, [error, message, clearError])

    const onChangeHandler = e => {
        setForm({...form,[e.target.name]:e.target.value})
        
        console.log(form);
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            console.log('data', data);
            auth.login(data.token, data.userId)
            console.log('data', data);
        } catch (error) {}
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Authentification</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Authentification</span>
                        <div>
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
                                    placeholder="Password"
                                    id="first_name"
                                    type="password"
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
                    </div>
                </div>
            </div>
        </div>
    )
}