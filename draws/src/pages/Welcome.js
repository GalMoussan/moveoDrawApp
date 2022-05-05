import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import  AppRoutes from '../types/Routes'



const Welcome = (props) => {


    // recieve the data from the previous component
    const { state } = useLocation()

    const { userName , sessionId } = state;



    // set the state to pass to the next component 
    const [mode, setMode] = useState('easy')
   

    // navigating through to next page
    const navigate = useNavigate()

    // TODO useCallback
    const onClick = () => {
        // navigate to the next component while passing the data
        navigate(AppRoutes.Choice, { state: { mode, sessionId}})
        

    }

    return (

        <div className='App-header'>
            <h1>Welcome to the Draw-Game!</h1>
            
            <button className='btn btn-primary' onClick={()=>setMode('easy')}>Easy</button>
            <button className='btn btn-secondary' onClick={()=>setMode('medium')} >Medium</button>
            <button className='btn btn-danger' onClick={()=>setMode('hard')}>Hard</button>
            <br />
            <button className='btn btn-warning' onClick={onClick}>START</button>
        </div>
    )
}

export default Welcome