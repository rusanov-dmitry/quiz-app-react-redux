import {combineReducers, createStore} from 'redux';

let reducersBatch = combineReducers({});

let store = createStore(reducersBatch);

export default store;