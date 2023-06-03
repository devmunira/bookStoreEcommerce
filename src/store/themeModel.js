import { action } from "easy-peasy";

const themeModel = {
    theme : true,
    settheme : action((state,payload) => {
        state.theme = !state.theme
    })

}

export default themeModel;