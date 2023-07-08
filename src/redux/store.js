import ColumnReducer from "./colunm/testReducer";
import { createStore, combineReducers, applyMiddleware} from 'redux'
import wishListReducer from "./wishList/wishListReducer";
import {persistStore, persistReducer} from 'redux-persist';
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk'
import cartReducer from "./cart/cartReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";



const persistConfig = {
    key : "app_storage",
    storage : AsyncStorage
}


const combaineReducers = combineReducers({
    column : ColumnReducer,
    wishList : wishListReducer,
    cart : cartReducer,
})

const persistReducers = persistReducer(persistConfig , combaineReducers)

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


const store = createStore(persistReducers , composedEnhancer)

export default store;

export const persistor = persistStore(store)