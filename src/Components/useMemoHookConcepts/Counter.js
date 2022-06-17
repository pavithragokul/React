import React, { useMemo, useState } from 'react';

function Counter(props) {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const incrementOne = ()=>{
        setCountOne(countOne+1)
    }

    const incrementTwo = ()=>{
        setCountTwo(countTwo+1)
    }
    const isEven = useMemo(()=>{
        let i=0
        while(i<200000000) i++
       return countOne % 2 === 0
   },[countOne])

    return (
        <div>

            <button onClick={incrementOne}>countone-{countOne}</button>
            <span>{isEven? 'Even' : 'Odd'}</span>
            <br/>
            <button onClick={incrementTwo}>counttwo-{countTwo}</button>
        </div>
    );
}

export default Counter;