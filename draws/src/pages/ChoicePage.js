import React, { useState } from 'react'
import randomWords from 'random-words'
import AppRoutes from '../types/Routes';
import Level from '../types/Level';
import { useLocation, useNavigate } from 'react-router-dom';


const ChoicePage = () => {

    // recieve the data from the previous component
    const { state } = useLocation()
    const { mode, sessionId } = state;



    // calculate how many letters will the word contain
    const calculateLength = (mode = Level.Easy) => {
        if (mode === Level.Easy) {
            return { maxLength: 4, minLength:3 };
        }
        if (mode === Level.Medium) {
            return { maxLength: 5, minLength:5 };
        }
        if (mode === Level.Hard) {
            return { maxLength: 15, minLength:6 };
        }
        return { maxLength: 0, minLength:0 };
    }

    // extract the parameters relevent to the random-words properties 
    const { maxLength, minLength } = calculateLength(mode)

    
    
     // create the navigation option
    const navigate = useNavigate()

    // generate a random word
    const myWord = randomWords({ exactly: 3, max:maxLength, min:minLength })

    // set the word that passes to the next components
    var word = useState('')

    var setWord1 = () => {
        word = myWord[0]
        // navigate to the next component while passing the data
        navigate(AppRoutes.Draw, { state: {word ,sessionId} })
        console.log(word)
    }
    var setWord2 = () => {
        word = myWord[1]
        // navigate to the next component while passing the data
        navigate(AppRoutes.Draw, { state: {word, sessionId} })
        console.log(word)
    }
    var setWord3 = () => {
        word = myWord[2]
        // navigate to the next component while passing the data
        navigate(AppRoutes.Draw, { state: {word , sessionId} })
        console.log(word)
    }



    return (
        // basic bootstrap css for a better UI
        <div className='d-flex justify-content-center App-choice'>
            <div>
                <h1 className='d-flex justify-content-center'>What would you like to Draw?</h1>
                <br />
                {/* stateVariable[0]="newValue";  */}
                <button className='btn btn-primary mr-5' onClick={setWord1}>{myWord[0]} </button>
                <button className='btn btn-primary mr-5' onClick={setWord2}>{myWord[1]} </button>
                <button className='btn btn-primary mr-5' onClick={setWord3}>{myWord[2]} </button>
            </div>
        </div>
    )
}
// ()=>navigate(AppRoutes.Draw , setWord(myWord[0]), {state:word} )

export default ChoicePage