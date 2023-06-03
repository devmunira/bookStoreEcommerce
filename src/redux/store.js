import ColumnReducer from "./colunm/testReducer";
import { createStore, combineReducers} from 'redux'

const combaineReducers = combineReducers({
    column : ColumnReducer,
})

export const reduxStore = createStore(combaineReducers)