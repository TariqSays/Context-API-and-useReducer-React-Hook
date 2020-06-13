import React, { useCallback, useContext } from 'react';
import ValueContext from './ValueContext';

function Child(props){
    let value = useContext(ValueContext);
    return(
        <div>
            Child Component {value[0]}
            <br></br>
            <button onClick={ ()=>{
                value[1](++value[0])
            }}>Update</button>
        </div>
    );
}
export default Child;