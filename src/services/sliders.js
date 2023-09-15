import axios from "axios";

export const getSlidersAllData = async (url) => { 
    console.log('In')
    const response = await axios.get(url);
    console.log(`url --- ${url} , response ----${response}`)
    let data = response.data.data;
    // Modify Respons with needed data
    return data = data.map((item) => {
        const {name, url, height, width} = item.attributes.image?.data?.attributes?.formats?.large;
        return {name, url, height, width}
    })
}