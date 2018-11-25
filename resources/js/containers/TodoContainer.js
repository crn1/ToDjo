import React from 'react';
import { connect } from 'react-redux';
import { changeValue, changeChecked, addItem, removeItem} from '../actions/TodoActions';
import { List, Map } from 'immutable'; 
import { Todo } from '../components/Todo';

class TodoContainer extends React.Component {
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return(
			<Todo
				changeValue={this.props.changeValue}
				changeChecked={this.props.changeChecked}
				addItem={this.props.addItem}
				removeItem={this.props.removeItem}
				addValue={this.props.todo.get('addValue')}
				items={this.props.todo.get('items')}
				listId={this.props.listId}
			/>	
		);	
	}
}

const mapStateToProps = (state) => {
	return {
		todo: state.TodoReducer
	};
};
	
const mapDispatchToProps = (dispatch) => {
	return {
		changeValue: (index, value) => {
			dispatch(changeValue(index, value));	
		},
		changeChecked: (index, checked) => {
			dispatch(changeChecked(index, checked));	
		},
		addItem: (value, listId) => {
			if(value != '')
			{
				dispatch(addItem(value, listId));	
			}
		},
		removeItem: (index) => {
			dispatch(removeItem(index));	
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
