import {combineReducers, createStore} from 'redux';
import optionsReducer from './reducers/options-reducer';
import categoriesReducer from './reducers/categories-reducer';
import quizReducer from './reducers/quiz-reducer';

let reducersBatch = combineReducers({
    optionsTab: optionsReducer,
    categoriesTab: categoriesReducer,
    quizTab: quizReducer
});

let store = createStore(reducersBatch);

window.store = store;

export default store;