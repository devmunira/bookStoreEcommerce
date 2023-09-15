import { toast } from "react-toastify";

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
        if(payload.stock <= 0){
            toast('Product is Out of Stock')
            return state
        }else{
            let index = state.items.findIndex(item => item.id === payload.id && item.variation === payload.variation);
            if(index !== -1){
                state.items[index].qnty = state.items[index].qnty + 1
                return state; 
            }
            return {...state , items : [...state.items , payload] };
        }
        // Remove Item From Cart List
        case REMOVE:
        return {...state , items : state.items.filter((item) => {
            if(item.id === payload.id && item.variation === payload.variation){
                return false;
            }else{
                return item;
            }
        })};


        case INCREAMENT:
        return {...state , items  : state.items.map((item) => {
            if(item.id === payload.id && item.variation === payload.variation){
               return {...item , qnty : item.qnty + 1}
            }else{
                return item
            }
        })}


        case DECREAMENT:
        return {...state , items : state.items.map((item) => {
            if(item.id === payload.id && item.variation === payload.variation){
                if(item.qnty > 1){
                    return {...item , qnty : item.qnty - 1}
                }
                return item
            }else{
                return item
            }
        })}

        case COUNT:
        return {...state , count : state.items.reduce((acc,cur) => {
            acc += cur.sale_price ? cur.sale_price * cur.qnty : cur.price * cur.qnty
            return acc;
        },0)}

        
        default:
        return state;
    }
}

export default cartReducer;