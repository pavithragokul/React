import React, { useEffect, useRef, useState } from 'react';

function Hooktimer(props) {
    const [timer, setTimer] = useState(0)
    const myRef = useRef()
    useEffect(()=>{
        myRef.current = setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        },1000)
    return ()=>{
        clearInterval(myRef.current)
    };
    },[])

    return (
        <div>
            Hook timer - {timer}
            <button onClick={()=>clearInterval(myRef.current)}>Clear timer</button>
        </div>
    );
}

export default Hooktimer;