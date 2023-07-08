/**
 *
 * @param {String} payload Id of a product
 * @returns
 */

import {getSingleProduct} from "@/src/services/product"
import { toast } from "react-toastify"

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


/**
 *
 * @param {String} payload Id of a product
 * @returns
 */
export const countTotalCartItem = () => {
    return {type: 'count'}
}




/**
 *
 * @param {String} payload Id of a product
 * @returns
*/

export const getAllWishListItem = (id , variation) => async(dispatch, getState) => {
    await getSingleProduct(id)
    .then(data => {
        dispatch(manageWishList({...data.items , variation : variation}))
    })
    .catch(error => console.log(error));
}
