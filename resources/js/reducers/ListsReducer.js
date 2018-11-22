import { List, Map } from 'immutable';

const ListsReducer = (lists = List(), action) =>
{
	switch (action.type)
	{
		case 'ADD_LIST':
			return lists.push(Map({ title: action.title }));

		case 'REMOVE_LIST':
			return lists.delete(action.index); 

		case 'CHANGE_TITLE':
			return lists.setIn([action.index, 'title'], action.title); 

		default:
			return lists;
	}
}

export default ListsReducer;
