import axios from "axios"

export const getAllProducts = async (url) => {
    const response = await axios.get(url);
    console.log(response.data)
    return response.data.data;
}


export const getSingleProduct = async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    const data = response.data;
    return data;
}