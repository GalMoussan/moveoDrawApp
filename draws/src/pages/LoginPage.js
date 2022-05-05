import React, { useState } from 'react'
import Input from '../components/Input'
import { useNavigate } from 'react-router-dom'
import AppRoutes from '../types/Routes'


const LoginPage = () => {


    // create the navigation option
    const navigate = useNavigate()

    // define a state to hold the username 
    const [userName, setUserName] = useState('')

    // define a minimum length for the username and disable the button until requirements are met
    const isEnabled = userName.length > 1

    // function to rerender and change the input box 
    const onChangeAnswer = (event) => {
        const value = event.target.value
        setUserName(value)
    }



    const postLogin = async () => {
        const result = await fetch('http://localhost:8080/login', { method: 'POST', body: JSON.stringify({ userName }) })
        const data = await result.json();
        console.log(data)
        const { shouldWait } = data ?? {}
    
        

        return shouldWait;
    }


    // function to navigate to the welcome page while passing the data of the username
    const onClickSubmit = async () => {
        if (userName.length > 2) {
            const shouldWait = await postLogin()
            if (shouldWait) {
                navigate(AppRoutes.Wating, { state: { userName, shouldWait, type: 'ready' } })
                return;
            }
            navigate(AppRoutes.Welcome, { state: { userName } })
            return;
        }else{
            setUserName('')
        }
    }

    return (


        <div className='App-login'>
            <Input
                value={userName}
                onChange={onChangeAnswer}
                label='Your username'
                placeholder='type your username' />
            <button className='btn btn-primary' disabled={!isEnabled} onClick={onClickSubmit}>LOGIN</button>
        </div>
    )
}

export default LoginPage