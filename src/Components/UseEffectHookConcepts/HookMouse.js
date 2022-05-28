import React, { useEffect, useState } from 'react';

function HookMouse(props) {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePosition = (e)=>{
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect((e)=>{
        console.log("useEffect started")
        window.addEventListener('mouseover',logMousePosition)

        return ()=>{
            console.log("clean up code started")
            window.removeEventListener('mouseover',logMousePosition)
        }
    },[])
    return (
        <div>
            X - {x}
            Y - {y}
        </div>
    );
}

export default HookMouse;