const { MANAGE , REMOVE , GET } = require("./actionTypes");
const { initialState } = require("./initialState");

/**
 * 
 * @param {Array} state 
 * @param {String} payload productId
 * @returns 
 */
const wishListReducer = (state = initialState , {type , payload}) => {
    switch (type) {
        case MANAGE:
        (state.data.length > 0 && state.data.indexOf(payload) !== -1) ? 
        state =  {...state , data : [...state.data.slice(0, state.data.indexOf(payload)), ...state.data.slice(state.data.indexOf(payload) + 1)]}
        : 
        state = {...state , data : [...state.data , payload]}
        return state;

        case REMOVE:
        state =  {...state , data : [...state.data.slice(0, state.data.indexOf(payload)), ...state.data.slice(state.data.indexOf(payload) + 1)]}
        return state;


        case GET:
        return state = {...state , items : payload};

        
        default:
        return state;
    }
}

export default wishListReducer;