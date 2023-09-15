import axios from "axios"
import { toast } from "react-toastify";

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
                id   : !author ? '' : item.attributes?.author?.data?.id,
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
    try {
      const products = await getAllProducts(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products?populate=*&filters[id][$in]=${id}`);

      const authorDetails = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/authors?populate=*&filters[id][$in]=${products.items[0].author.id}`);

      return {
        item : {...products?.items[0], 
                author : {
                ...products?.items[0]?.author, 
                image : authorDetails?.data.data[0]?.attributes?.image?.data?.attributes?.url ?? null,
                products : authorDetails?.data.data[0]?.attributes?.products?.data?.length ?? 0,
            }
            },
        isLoading : false
      }
    } catch (error) {
        toast(error.message)
        return {
            item : [],
            isLoading : false
        }
    }
}


export const getWishListProducts = async (ids) => {
    let isLoading = true;
    try {
        ids = ids.length > 0 ? ids : [];
        let url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products?populate=*`;

        ids.forEach(id => {
            url += `&filters[id][$in]=${id}`
        });
        const response = await axios.get(url);
        const items = response.data.data.map((item) => {
        const {title,price,sale_price,sku,stock,variation,label} = item.attributes; 
        return {
            id : item.id,
            title,
            price,
            sale_price,
            sku,
            stock,
            variation,
            thumbnail : item.attributes.thumbnail?.data.attributes.url || '',
            }
        }) 
        isLoading = false;
        return {
            items,
            isLoading
        };
    } catch (error) {
        toast(error.message)
        return {
            items : [],
            isLoading : false
        }
    }
}
