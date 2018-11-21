export function addList(title) {
	return {
		type: 'ADD_LIST',
		title
	};
}

export function removeList(index) {
	return {
		type: 'REMOVE_LIST',
		index
	};
}

export function changeTitle(index, title) {
	return {
		type: 'CHANGE_TITLE',
		index,
		title
	};
}
