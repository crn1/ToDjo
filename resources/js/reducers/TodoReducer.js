import { List, Map } from 'immutable';

const initialState = Map({
	items: List(),
});

const TodoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_VALUE':
			return state.setIn(
				['items', action.index, 'value'],
				action.value);

		case 'CHANGE_CHECKED':
			return state.setIn(
				['items', action.index, 'checked'],
				action.checked);

		case 'ADD_ITEM':
			return state.updateIn(['items'],
				item => item.push(Map({
					value: action.value,
					checked: false,
					listId: action.listId
				}))	
			);

		case 'REMOVE_ITEM':
			return state.deleteIn(['items', action.index])

		case 'REMOVE_LIST':
			var temp = state.get('items').filter(item => {
				if(action.index !== item.get('listId')){
					return item;
				}	
			}).map(item => {
				if(item.get('listId') > action.index)	
				{
					return item.set('listId', item.get('listId') - 1);	
				}else{
					return item;	
				}
			});
			return state.set('items', temp);

		default:
			return state;
	}
}

export default TodoReducer;
