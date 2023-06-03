import axios from "axios";

// get all post data from api
export const getStorePostData = async (url=`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts?populate=blog_category&populate[0]=posttype&populate[1]=posttype.thumbnail&populate[2]=author&populate[3]=posttype.audio`) => {
    const response = await axios.get(url);
    const items = response.data.data.map((item,index) => {
        const {createdAt,title,updatedAt} = item.attributes;
        const {__component, description,} = item.attributes.posttype[0]
        const blogCategory = item.attributes?.blog_category?.data?.attributes || undefined
        const bauthor = item.attributes?.author?.data.attributes || undefined
        return {
            category : {
                name : !blogCategory ? '' : blogCategory.name,
                slug : !blogCategory ? '' : blogCategory.slug,
            },
            author : {
                name :!bauthor ? '' : bauthor.name,
                slug :!bauthor ? '' : bauthor.name,
            },
            id : item.id,
            title,
            posttype : __component.split('.')[1],
            thumbnail : item.attributes.posttype[0].thumbnail?.data.attributes.url || '',
            images : '',
            video : item.attributes.posttype[0]?.iframeurl || '',
            audio : item.attributes.posttype[0]?.audio?.data.attributes.url || '',
            description,
            createdAt,
            updatedAt
        }
    }) 

    return {
        items , 
        pagination : response.data.meta.pagination
    }
}


// get All Post Id for getStaticPaths
export const getStorePostId = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts?fields[0]=id`);
    const id =  response.data.data.map((item,index)=>{
        return { params: {blogId : item.id.toString() }  }
    });
    return id; 
}

// get single post data
export const getSinglePostData = async (id) => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts/${id}?populate=blog_category&populate[0]=posttype&populate[1]=posttype.thumbnail&populate[2]=author&populate[3]=posttype.audio`);
    const item = response.data.data;
    const {createdAt,title,updatedAt} = item.attributes;
    const {__component, description,} = item.attributes?.posttype[0]
    const {name : categoryName , slug : categorySlug} = item.attributes?.blog_category?.data?.attributes
    const {name : authorName , slug : authorSlug} = item.attributes?.author?.data.attributes
    return {
        category : {
            name : categoryName,
            slug : categorySlug,
        },
        author : {
            name : authorName,
            slug : authorSlug,
        },
        id : item.id,
        title,
        posttype : __component.split('.')[1],
        thumbnail : item.attributes.posttype[0].thumbnail?.data.attributes.url || '',
        images : '',
        video : item.attributes.posttype[0]?.iframeurl || '',
        audio : item.attributes.posttype[0]?.audio?.data.attributes.url || '',
        description,
        createdAt,
        updatedAt
    }; 
}



// get all blog categories from rest api
export const getAllCategories = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog-categories?populate=*&fields[0]=id&fields[1]=name&fields[2]=posts`);
    const categories =  response.data.data.map((item) => {
        return {
            id    : item.id,
            name  : item.attributes.name,
            count : item.attributes.posts.data.length,
        }
    });
    return categories;
}

