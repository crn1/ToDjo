const initialState = {addValue: '', items: []};

const CheckListaReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_VALUE':
			return { ...state,
				items: {
					...state.items,
					[action.key]: {
						...state.items[action.key],
						value: action.value
					}
				}
			};	
		case 'CHANGE_CHECKED':
			return { ...state,
				items: {
					...state.items,
					[action.key]: {
						...state.items[action.key],
						checked: !action.checked
					}
				}
			};	
		case 'ADD_ITEM':
			return { ...state,
				items:
				[
					...state.items, 
					{
						value: action.value,
						checked: false
					}
				],
				addValue: ''
			};	
		case 'REMOVE_ITEM':
			return {...state,
				items: state.items.filter(item => item.id !== action.key)	
			};	

		case 'CHANGE_ADD_VALUE':
			return {...state, addValue: action.value};	
		default:
			return state;
	}
}

export default CheckListaReducer;
