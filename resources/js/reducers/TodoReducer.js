import { List, Map } from 'immutable';

const initialState = List(Map({
	addValue: '', 
	items: [],
}));

const TodoReducer = (state = initialState, action) => {
	switch (action.type) {
		/*case 'CHANGE_VALUE':

		case 'CHANGE_CHECKED':*/

		case 'ADD_ITEM':
			return state.items.push(Map(action.title ));

		/*case 'REMOVE_ITEM':

		case 'CHANGE_ADD_VALUE':*/

		default:
			return state;
	}
}

export default TodoReducer;
