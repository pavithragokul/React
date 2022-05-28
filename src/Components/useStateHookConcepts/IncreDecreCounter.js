import React, { useState } from 'react';

function IncreDecreCounter(props) {
    const initialValue = 0
    const [count,setCount] = useState(initialValue)
    const IncrementFive = ()=>{
        for(let i =0 ;i<5;i++){
            setCount(prevState => prevState + 1)
        }
    }
    return (
        <div>
            Count : {count}
            <button onClick={()=>setCount(initialValue)}>Reset</button>
            <button onClick={()=>setCount(prevState => prevState + 1)}>Increment</button>
            <button onClick={()=>setCount(prevState => prevState - 1)}>Decrement</button>
            <button onClick={IncrementFive}>Increment 5</button>
        </div>
    );
}

export default IncreDecreCounter;