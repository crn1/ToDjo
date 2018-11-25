export function changeValue(index, value) {
	return {
		type: 'CHANGE_VALUE',
		index,
		value
	};
}

export function changeChecked(index, checked) {
	return {
		type: 'CHANGE_CHECKED',
		index,
		checked
	};
}

export function addItem(value, listId) {
	return {
		type: 'ADD_ITEM',
		value,
		listId
	};
}

export function removeItem(index) {
	return {
		type: 'REMOVE_ITEM',
		index
	};
}

