/**
 *
 * @param {String} payload Id of a product
 * @returns
 */

import {getWishListProducts} from "@/src/services/product"
import { toast } from "react-hot-toast"

export const manageWishList = (payload) => {
    return {type: 'manage', payload: payload}
}

/**
 *
 * @param {String} payload Id of a product
 * @returns
 */

export const removeItem = (payload) => {
    return {type: 'remove', payload: payload}
}

export const wishListLoad = (payload) => {
    return {type: 'get', payload: payload}
}

/**
 *
 * @param {String} payload Id of a product
 * @returns
*/

export const getAllItem = (ids) => async(dispatch, getState) => {
    const response = await getWishListProducts(ids)
    .then(data => {
        dispatch(wishListLoad(data.items))
    })
    .catch(error => toast(error.message));
    console
    .log('res' , response)
}
