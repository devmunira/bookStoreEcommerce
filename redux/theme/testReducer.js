const { INCREMENT, DECREMENT } = require("./actionTypes");
const { initialState } = require("./initialState");


const CounterReducer = (state = initialState , {type , payload}) => {
    switch (type) {
        case INCREMENT:
        return state + payload    
        break;

        case DECREMENT:
        return state - payload    
        break;
    
        default:
        return state;
    }
}

export default CounterReducer;