import React, { useState } from 'react';
import useInput from './useInput';

function UserForm(props) {
    // const [firstName,setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')

    const [firstName,bindFirstName,resetFirstName] = useInput('')
    const [lastName,bindLastName,resetLastName] = useInput('')
    const submitHandler = e =>{
        e.preventDefault()
        alert(`hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
        <form onSubmit={submitHandler}>
            <label >firstName</label>
            <input 
            // value={firstName}
            // onChange={e=>setFirstName(e.target.value)}
            {...bindFirstName}
            type="text"/>
            <br/>
            <label >lastName</label>
            <input 
            // value={lastName}
            // onChange={e=>setLastName(e.target.value)}
            {...bindLastName}
            type="text"/>
            <button>submit</button>
        </form>
        </div>
    );
}

export default UserForm;