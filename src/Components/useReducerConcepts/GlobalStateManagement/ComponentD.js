import React, { useContext } from 'react';
import { countContext } from '../../../App';

function ComponentD(props) {
    const CountContext = useContext(countContext)
    return (
        <div>
            ComponentD -  {CountContext.countState}
            <button onClick={()=>CountContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=>CountContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>CountContext.countDispatch('reset')}>Reset</button>
        </div>
    );
}

export default ComponentD;