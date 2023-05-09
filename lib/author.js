import axios from "axios"

export const getAllAuthors = async(url) => {
    const response = await axios.get(url);
    let data = response.data.data;
    return data = data.map((item) => {
        let {name, slug} = item.attributes;
        return {name, slug, image: item.attributes.image.data.attributes.url, alt: item.attributes.image.data.attributes.name}
    })

}