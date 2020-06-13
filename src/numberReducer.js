import { act } from "react-dom/test-utils";

const numberReducer = (state, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return state+action.val
        case 'DECREMENT':
            return state-action.val
    }
}
export default numberReducer;