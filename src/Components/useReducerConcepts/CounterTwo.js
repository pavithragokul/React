import React, { useReducer } from 'react';

//converting simple numeric state into an object
const initialState ={
    //property FirstCounter which is set to 0
    firstCounter:0,
    secondCounter:2
}
//having two poperties in the state object but we are changing one at a time
//component state and action are now objects
//need to merge the state properties using spread operator
const reducer = (state, action)=>{
    //action referes to the entire action in that we are acessing type property
    switch(action.type){
        case 'increment':
            //return {firstCounter:state.firstCounter+1}
            //Instead of hardcoding the values we are just passing whatever we needed
            return {...state, firstCounter:state.firstCounter+action.value}
        case 'decrement':
            return {...state, firstCounter:state.firstCounter-action.value}
        case 'increment2':
            return {...state, secondCounter:state.secondCounter+action.value}
        case 'decrement2':
            return {...state, secondCounter:state.secondCounter-action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTwo(props) {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            count - {count.firstCounter}
            <button onClick={()=>dispatch({type:'increment', value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'increment', value:5})}>Increment by 5</button>
            <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement by 5</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            
            <div>
            secondCount -{count.secondCounter}
            <button onClick={()=>dispatch({type:'increment2',value:2})}>Increment by 2</button>
            <button onClick={()=>dispatch({type:'decrement2',value:2})}>decrement by 2</button>
            </div>

        </div>
    );
}
//count referes to the entire state object in that we are just accessing first counter value -line no 27
//converting simple string action into object by making it as property type 
export default CounterTwo;