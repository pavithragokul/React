import React, {useReducer} from 'react';
import './App.css';
import UserForm from './Components/CustomHook/UseInputCustomHook/UserForm';
// import DocTitleOne from './Components/CustomHook/DocTitleOne';
// import DocTitleTwo from './Components/CustomHook/DocTitleTwo';
// import CounterOne from './Components/CustomHook/usCounterHook/CounterOne';
// import CounterTwo from './Components/CustomHook/usCounterHook/CounterTwo';
//import Hooktimer from './Components/usRefConcepts/Hooktimer';
//import ClassTimer from './Components/usRefConcepts/ClassTimer';
//import FocusInput from './Components/usRefConcepts/FocusInput';
//import Counter from './Components/useMemoHookConcepts/Counter';
//import ParentComponent from './Components/useCallBAckConcepts/ParentComponent';
//import DataFetchingUseReducer from './Components/useReducerConcepts/DataFetchingUseReducer'
//import DataFetchingUseState from './Components/useReducerConcepts/DataFetchingUseState';
// //goal is mantain account state in app.js and modify the state from components  A, d anf F
// import ComponentA from './Components/useReducerConcepts/GlobalStateManagement/ComponentA';
// import ComponentB from './Components/useReducerConcepts/GlobalStateManagement/ComponentB';
// import ComponentC from './Components/useReducerConcepts/GlobalStateManagement/ComponentC';
//import CounterThree from './Components/useReducerConcepts/CounterThree';
//import Counterone from './Components/useReducerConcepts/Counterone';
//import CounterTwo from './Components/useReducerConcepts/CounterTwo';
//import ComponentC from './Components/useContextConcepts/ComponentC';
//import DataFetching from './Components/UseEffectHookConcepts/DataFetching';
//import IntervalClassCounter from './Components/UseEffectHookConcepts/IntervalClassCounter';
//import IntervalHookCounter from './Components/UseEffectHookConcepts/IntervalHookCounter';
//import MouseContainer from './Components/UseEffectHookConcepts/MouseContainer';
// import ClassMousePosition from './Components/UseEffectHookConcepts/ClassMousePosition';
//import HookMouse from './Components/UseEffectHookConcepts/HookMouse';
// import CounterHookFuncComponent from './Components/UseEffectHookConcepts/CounterHookFuncComponent';
// import CounterHookFuncTwo from './Components/UseEffectHookConcepts/CounterHookFuncTwo';
// import UseStateHookWithArray from './Components/useStateHookConcepts/UseStateHookWithArray';
// import UseStateWithObject from './Components/useStateHookConcepts/UseStateWithObject';
// import IncreDecreCounter from './Components/useStateHookConcepts/IncreDecreCounter';
// import ClassCounter from './Components/ClassCounter';
// import CounterHook from './Components/useStateHookConcepts/CounterHook';
// import ClassCounterOne from './Components/UseEffectHookConcepts/ClassCounterOne';
// import ClassCounterTwo from './Components/UseEffectHookConcepts/ClassCounterTwo';

//  export const userContext = React.createContext();
//  export const workContext = React.createContext();

// export const countContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action)=>{
//     switch(action){
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state -1
//         case 'reset':
//             return initialState
//         default:
//             return state
//     }
// }

function App() {
  //const [count,dispatch] = useReducer(reducer, initialState)
  return (
  //<countContext.Provider value={ {countState:count, countDispatch:dispatch}}>
    <div className="App">
      {/* <ClassCounter />
      <CounterHook />  */}
      {/* <IncreDecreCounter /> */}
      {/* < UseStateWithObject /> */}
      {/* <UseStateHookWithArray /> */}
      {/* <ClassCounterOne/> */}
      {/* <CounterHookFuncComponent /> */}
      {/* <ClassCounterTwo /> */}
      {/* <CounterHookFuncTwo /> */}
      {/* <ClassMousePosition /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter />
      <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <userContext.Provider value={'Pavithra'}>
        <workContext.Provider value={'Senior Analyst Engineer'}>
            <ComponentC />
        </workContext.Provider>   
      </userContext.Provider> */}
      {/* <CounterThree /> */}
      {/* count-{count}
      <ComponentA />
      <ComponentB />
      <ComponentC /> */}
      {/* <DataFetchingUseState /> */}
      {/* <DataFetchingUseReducer /> */}
      {/* <ParentComponent /> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      {/* <ClassTimer /> */}
      {/* <Hooktimer /> */}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <CounterOne />
      <CounterTwo /> */}
      <UserForm />
    </div>
 // </countContext.Provider>
  );
}

export default App;
