import React, { useEffect, useState, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { bounce } from 'react-animations'
import styled, { keyframes } from 'styled-components'
import AppRoutes from '../types/Routes'

const Waiting = () => {
    // recieve the data from the previous component
    const { state } = useLocation()
    const navigate = useNavigate()
    const [waitingState, setWaitingState] = useState({})

    useEffect(() => {
        setWaitingState(state);

        setInterval(() => {
            handleShouldWait();
        }, 1000)
    }, [])

    const handleShouldWait = useCallback(async () => {
        const { uri, word, userName, type, sessionId } = state;

        const result = await fetch('http://localhost:8080/status', { method: 'POST', body: JSON.stringify({ userName, type }) })
        const data = await result.json();
        const { shouldWait } = data ?? {}


        if (type === 'ready') {
            navigate(AppRoutes.Welcome, { state: { userName, sessionId } })
            return;
        }

        navigate(AppRoutes.Guess, { state: { uri, word, userName, sessionId } })
    }, [state]);

    const onClick = () => {
        // navigate(AppRoutes.Guess, { state: { uri: uri, word: word } })
    }

    return (


        <div className='d-flex justify-content-center App-header'>
            {/* use the bounce animation */}
            <Bounce><h1>waiting for second player to {state?.type === 'ready' ? 'be ready' :'finish'}...</h1></Bounce>

            <button className='btn btn-primary' onClick={onClick}>move to next page</button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <button className='btn btn-danger' onClick={() => navigate(AppRoutes.Login)}>back home</button>
        </div>
    )
}

export default Waiting

// create a bounce animation that is infinite
const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;