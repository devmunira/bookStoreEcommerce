import { createStore, persist } from 'easy-peasy';
import themeModel from './themeModel';
import columnModel from './columnModel';
import postModel from './postModel';

const store = createStore(persist({
    theme : themeModel,
    column : columnModel,
    post : postModel,
}));

export default store