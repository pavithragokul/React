import React, { useEffect, useState } from 'react';

function IntervalHookCounter(props) {
    const [count,setCount] = useState(0);

    const tick = ()=>{
        setCount(count+1)
        //setCount(prevCount => prevCount+1)
    }

    useEffect(()=>{
        const interval = setInterval(tick,1000)

        return()=>{
            clearInterval(tick)
        }
    },[count])
    return (
        <div>
            <h1>Hook {count}</h1>
        </div>
    );
}

export default IntervalHookCounter;