import { CHANGECOLUNM } from "./actionTypes";
import { initialState }  from "./initialState";


const ColumnReducer = (state = initialState , {type , payload}) => {
    switch (type) {
        case CHANGECOLUNM:
        return payload   
    
        default:
        return state;
    }
}

export default ColumnReducer;