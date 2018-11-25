import { List, Map } from 'immutable';

const ListsReducer = (lists = List(), action) =>
{
	switch (action.type)
	{
		case 'ADD_ITEM':
			return lists.setIn([action.listId, 'addValue'], '');

		case 'ADD_LIST':
			return lists.map((list, index) => {
				return list.set('index', index); 	
			}).push(Map({
				index: lists.size,
				title: action.title,
				addValue: ''
			}));

		case 'REMOVE_LIST':
			return lists.filter(list => 
			{
				if(list.get('index') !== action.index)	
				{
					return list;	
				}
			}).map((list, index) => {
				return list.set('index', index); 	
			}); 

		case 'CHANGE_TITLE':
			return lists.setIn([action.index, 'title'], action.title); 

		case 'CHANGE_ADD_VALUE':
		return lists.setIn([action.index, 'addValue'], action.value); 
		default:
			return lists;
	}
}

export default ListsReducer;
