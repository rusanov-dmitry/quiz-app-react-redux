import {combineReducers, createStore} from 'redux';
import optionsReducer from './reducers/options-reducer';
import categoriesReducer from './reducers/categories-reducer';

let reducersBatch = combineReducers({
    optionsTab: optionsReducer,
    categoriesTab: categoriesReducer
});

let store = createStore(reducersBatch);

window.store = store;

export default store;