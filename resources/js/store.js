import { createStore, combineReducers } from 'redux';
import TodoReducer from './reducers/TodoReducer';
import ListsReducer from './reducers/ListsReducer';

export default createStore(combineReducers({ListsReducer, TodoReducer }));
