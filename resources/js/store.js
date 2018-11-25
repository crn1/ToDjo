import { createStore, combineReducers } from 'redux';
import TodoReducer from './reducers/TodoReducer';
import ListsReducer from './reducers/ListsReducer';

export default createStore(combineReducers({ListsReducer, TodoReducer }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
