import ColumnReducer from "./colunm/testReducer";
import { createStore, combineReducers, applyMiddleware} from 'redux'
import wishListReducer from "./wishList/wishListReducer";
import {persistStore, persistReducer} from 'redux-persist';
import storage  from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk'
import cartReducer from "./cart/cartReducer";



const persistConfig = {
    key : "app_storage",
    storage
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