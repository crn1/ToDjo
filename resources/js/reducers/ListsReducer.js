const ListsReducer = (lists = [], action) =>
{
	switch (action.type)
	{
		case 'ADD_LIST':
			return [...lists, { title: action.title}]; 

		case 'REMOVE_LIST':
			return [...lists.slice(0, action.index), ...lists.slice(action.index + 1)]

		case 'CHANGE_TITLE':
			return [
				...lists.slice(0, action.index),
				{ title: action.title },
				...lists.slice(action.index + 1),
			];

		default:
			return lists;
	}
}

export default ListsReducer;
