import { useState } from 'react'

export const useCounter = (initialState, max) => {
    const [counter, setCounter] = useState(initialState)
    
    const reset = () => {
        setCounter(initialState)
    }
    const increment = () => {
        if(counter < 10 ) {
        setCounter(prev => prev + 1)
        }
        
    }
    const decrement = () => {
       if (counter > initialState) {
        setCounter(prev => prev - 1)
       }
    }
    return {
        counter,
        increment,
        decrement,
        reset
    }
}