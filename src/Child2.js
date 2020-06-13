import React, {  useContext, useReducer } from 'react';
import ValueContext from './ValueContext';
import numberReducer from './numberReducer';

function Child(){
    let [state, dispatch] = useReducer(numberReducer, 22);
    return(
        <div>
            Child-2 Component {state}
            <br></br>
            <button onClick={()=>{
                dispatch({type:"INCREMENT", val:10})
            }}>Increment</button>
            <button onClick={()=>{
                dispatch({type:"DECREMENT", val:20})
            }}>Decrement</button>
        </div>
    );
}
export default Child;