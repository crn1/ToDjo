import React from 'react';
import { connect } from 'react-redux';
import { changeValue, changeChecked, addItem, removeItem, changeAddValue } from '../actions/TodoActions';

import {Todo} from '../components/Todo';

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
				changeAddValue={this.props.changeAddValue}
				addValue={this.props.todo.addValue}
				items={this.props.todo.items}
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
		changeChecked: (checked) => {
			dispatch(changeChecked(checked));	
		},
		addItem: (value) => {
			if(value != '')
			{
				dispatch(addItem(value));	
			}
		},
		removeItem: (index) => {
			dispatch(removeItem(index));	
		},
		changeAddValue: (value) => {
			dispatch(changeAddValue(value));	
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
