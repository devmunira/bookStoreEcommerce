import axios from "axios";

export const getSlidersAllData = async (url) => { 
    const response = await axios.get(url);
    let data = response.data.data;
    // Modify Respons with needed data
    return data = data.map((item) => {
        console.log(item.attributes.image?.data)
        const {name, url, height, width} = item.attributes.image?.data?.attributes?.formats?.large;
        return {name, url, height, width}
    })
}