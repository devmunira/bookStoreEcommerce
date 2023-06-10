import axios from "axios"

export const getAllProducts = async (url) => {
        const response = await axios.get(url);
        const items = response.data.data.map((item) => {
        const {createdAt,title,updatedAt,price,sale_price,sku,description,stock,short_des,table,variation,label} = item.attributes;
        const category = item.attributes?.category_id?.data?.attributes || undefined
        const author =   item.attributes?.author?.data?.attributes || undefined
        const review =   item.attributes?.reviews_id?.data || undefined
        const gallery = item.attributes.gallery?.data?.length > 0 ? item.attributes.gallery?.data.map((item,index) => {
            return item.attributes.url;
            }) : []
            return {
                category : {
                name : !category ? '' : category.name,
                id   : !category ? '' : item.attributes?.category_id?.data?.id
            },
            author : {
                name : !author ? '' : author.name,
                id   : !author ? '' : item.attributes?.author?.data?.id
            },
            id : item.id,
            title,
            createdAt,
            updatedAt,
            price,
            sale_price,
            sku,
            stock,
            short_des,
            table,
            variation,
            label,
            thumbnail : item.attributes.thumbnail?.data.attributes.url || '',
            gallery,
            review,
            description,
            }
        }) 
        return {
            items , 
            pagination : response.data.meta.pagination
        }    
}


export const getSingleProduct = async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    const data = response.data;
    return data;
}