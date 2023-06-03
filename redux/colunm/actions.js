import { CHANGECOLUNM } from "./actionTypes"

export const chnageColumn = (payload) => {
    return {
        type : CHANGECOLUNM,
        payload : payload
    }
}