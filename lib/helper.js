import {useEffect} from "react";

const AUTH_TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN;

export const afterLoadedWindowFunctionality = () => {
    return typeof window !== 'undefined'
        ? true
        : false
}

export const getToken = () => {
    if(typeof window !== 'undefined'){
       return localStorage.getItem(AUTH_TOKEN)
    }
}

export const setToken = (token) => {
    if(typeof window !== 'undefined'){
        return localStorage.setItem(AUTH_TOKEN , token)
     }
}

export const removeToken = () => {
    afterLoadedWindowFunctionality
        ? localStorage.removeItem(AUTH_TOKEN)
        : false;
}