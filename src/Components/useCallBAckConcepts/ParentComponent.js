import React, { useCallback, useState } from 'react';
import Button from './Button';
import Count from './Count';
import Title from './Title';

function ParentComponent(props) {
    const [age, setAge] = useState(20)
    const [salary, setSalary] = useState(30000)

    const incrementAge = useCallback(()=>{
        setAge(age + 1)
    },[age])
    
    const incrementSalary = useCallback(()=>{
        setSalary(salary + 5000)
    },[salary])

    return (
        <div>
            <Title />
			<Count text="Age" count={age} />
			<Button handleClick={incrementAge}>Increment Age</Button>
			<Count text="Salary" count={salary} />
			<Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    );
}

export default ParentComponent;