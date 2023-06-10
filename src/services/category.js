import axios from "axios"

export const getAllCategories = async(url) => {
    const response = await axios.get(url);
    let data = response.data.data;
    return data = data.map((item) => {
        let {name, slug} = item.attributes;
        return {
            id : item.id ,
            name, slug, 
            image: item.attributes.image.data.attributes.formats.thumbnail.url, 
            alt: item.attributes.image.data.attributes.formats.thumbnail.name
        }
    })
}

