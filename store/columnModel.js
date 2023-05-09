import { action } from "easy-peasy";

const columnModel = {
    data : 4,
    setColumn : action((state,payload) => {
        state.data = payload
    })

}

export default columnModel;