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
        console.log(payload)
        if(payload.stock <= 0){
            toast('Product is Out of Stock')
            return state
        }else{
            let index = state.findIndex(item => item.id === payload.id && item.variation === payload.variation);
            if(index === -1){
                return [...state , payload];
            }
            return state
        }

        case REMOVE:
        return state.filter((item) => {
            if(item.id === payload.id && item.variation === payload.variation){
                return false;
            }else{
                return item;
            }
        })

        default:
        return state;
    }
}

export default wishListReducer;