import axios from "axios";

export const getStorePostData = async () => {
    const response = await axios.get('https://dummyjson.com/posts/?limit=10');
    console.log(response.data)
    return response.data; 
}

export const getStorePostId = async () => {
    const response = await axios.get('https://dummyjson.com/posts/?limit=3');
    const id =  response.data.posts.map((item,index)=>{
        return { params: {blogId : item.id.toString() }  }
    });
    return id; 
}

export const getSinglePostData = async (id) => {
    const response = await axios.get(`https://dummyjson.com/posts/${id}`);
    return response.data; 
}