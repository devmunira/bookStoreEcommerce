import { getSingleProduct } from "@/src/services/product"
import { toast } from "react-hot-toast"

export const addToCart = (payload) => {
    return {type: 'add', payload: payload }
}

export const removeCart = (payload) => {
    return {type: 'remove', payload: payload }
}

export const countTotal = (payload) => {
    return {type: 'count', payload: payload}
}


export const increaemntQnty = (payload) => {
    return {type: 'increament', payload: payload}
}

export const decrementQnty = (payload) => {
    return {type: 'decreament', payload: payload}
}



export const isLoading = (payload) => {
    return {type: 'loading', payload: payload}
}



export const getAllItem = (id) => async(dispatch, getState) => {
    dispatch(isLoading(true))
    await getSingleProduct(id)
    .then(data => {
        dispatch(isLoading(false))
        dispatch(addToCart({...data.items , qnty : 1 , isLoading : false}))
    })
    .catch(error => console.log(error));
}
