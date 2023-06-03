import axios from "axios"

export const getAllAuthorsData = async(url) => {
    const response = await axios.get(url);
    let data = response.data.data;
    return data = data.map((item) => {
        let {name, slug} = item.attributes;
        return {name, slug, image: item.attributes.image.data.attributes.url, alt: item.attributes.image.data.attributes.name,count : item.attributes.posts.data.length}
    })

}




// get all blog author from rest api
export const getAllAuthors = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/authors?populate=posts&fields[0]=id&fields[1]=name&fields[2]=posts.data`);
    const authors =  response.data.data.map((item) => {
        return {
            id    : item.id,
            name  : item.attributes.name,
            count : item.attributes.posts.data.length,
        }
    });
    return authors;
}









