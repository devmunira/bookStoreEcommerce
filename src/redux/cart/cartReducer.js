const { INCREAMENT , DECREAMENT , ADD , COUNT , REMOVE , LOADING } = require("./actionTypes");
const { initialState } = require("./initialState");

/**
 * 
 * @param {Array} state 
 * @param {String} payload productId
 * @returns 
 */
const cartReducer = (state = initialState , {type , payload}) => {
    switch (type) {
        case ADD:
        return {...state , items : {...state.items , [payload.id] : {...payload}} };

        case REMOVE:
        state =  {...state , data : [...state.data.slice(0, state.data.indexOf(payload)), ...state.data.slice(state.data.indexOf(payload) + 1)]}
        return state;


        case LOADING:
        return state = {...state , isLoading : payload};

        
        default:
        return state;
    }
}

export default cartReducer;