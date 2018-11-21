export function changeValue(key, value) {
	return {
		type: 'CHANGE_VALUE',
		key,
		value
	};
}

export function changeChecked(key, checked) {
	return {
		type: 'CHANGE_CHECKED',
		key,
		checked
	};
}

export function addItem(value) {
	return {
		type: 'ADD_ITEM',
		value
	};
}

export function removeItem(key) {
	return {
		type: 'REMOVE_ITEM',
		key
	};
}

export function changeAddValue(value) {
	return {
		type: 'CHANGE_ADD_VALUE',
		value
	};
}
