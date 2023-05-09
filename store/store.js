import { createStore, persist } from 'easy-peasy';
import themeModel from './themeModel';
import columnModel from './columnModel';

const store = createStore(persist({
 theme : themeModel,
 column : columnModel,
}));

export default store