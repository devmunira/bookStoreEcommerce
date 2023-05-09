import axios from "axios"

export const getAllProducts = async () => {
    const response = await axios.get(`https://dummyjson.com/products`);
    const data = response.data.products;
    return data;
}


export const getSingleProduct = async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    const data = response.data;
    console.log(data)
    return data;
}