import { getSingleProduct } from "@/src/services/product"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"


export const addToCart = (payload) => {
    return {type: 'add', payload: payload }
}

export const removeCart = (payload) => {
    return {type: 'remove', payload: payload }
}

export const countTotal = () => {
    return {type: 'count'}
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



export const getAllItem = (id , variation , qnty = 1) => async(dispatch, getState) => {
    dispatch(isLoading(true))
    await getSingleProduct(id)
    .then(data => {
        dispatch(addToCart({...data.item , qnty : qnty  , isLoading : false , variation : variation}))
        dispatch(isLoading(false))
    })
    .catch(error => console.log(error));
}
