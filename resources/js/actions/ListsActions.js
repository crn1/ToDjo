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

export function changeAddValue(index, value) {
	return {
		type: 'CHANGE_ADD_VALUE',
		index,
		value
	};
}
