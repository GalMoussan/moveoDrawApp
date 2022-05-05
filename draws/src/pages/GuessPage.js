import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import AppRoutes from '../types/Routes';

const GuessPage = () => {

    // recieve the data from the previous component
    const { state } = useLocation();
    const { uri, word} = state;


    console.log(word)

    // states if there is or isnt an answer
    const [answer, setAnswer] = useState('')

    console.log(uri)

    // function to change the value inside the input by the client
    const onChangeAnswer = (event) => {
        const value = event.target.value
        setAnswer(value)
    }

    const navigate = useNavigate()

    const onClick = () =>{
        if(answer === word){
        navigate(AppRoutes.Wating, {state: {uri}})
        }else{
            setAnswer('')
        }
    }



    return (
        <div className='App-guess'>
            <img className="card-img-top" style={{ width: 500, height: 500 }} src={uri} alt="Drawing" />
            <Input
                value={answer}
                onChange={onChangeAnswer}
                label='Your Answer'
                placeholder='Your Answer' />
            <button className='btn btn-primary' onClick={onClick}>SUBMIT</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <button className='btn btn-primary' onClick={()=>navigate(AppRoutes.Login)}>back home</button>
        </div>
    )
}

export default GuessPage