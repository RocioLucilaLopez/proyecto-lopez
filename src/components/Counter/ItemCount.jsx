import React from 'react'
import { useCounter } from './UseCounter'


function ItemCount({ inicial }) {

    const { counter, increment, decrement, reset } = useCounter(inicial)

    return (
        <div>
            <h1>{counter}</h1>

            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default ItemCount