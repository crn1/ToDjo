import React from 'react';
import {connect} from 'react-redux';
import {changeTitle, removeList, changeAddValue} from '../actions/ListsActions';
import {addItem} from '../actions/TodoActions';
import {List} from '../components/List.js';

class ListContainer extends React.Component {
	render() {
		return (
			<List
				index={this.props.index}
				changeTitle={this.props.changeTitle}
				changeAddValue={this.props.changeAddValue}
				removeList={this.props.removeList}
				title={this.props.title}
				addValue={this.props.addValue}
				addItem={this.props.addItem}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		lists: state.ListsReducer
	};
};
	
const mapDispatchToProps = (dispatch) => {
	return {
		changeTitle: (index, value) => {
			dispatch(changeTitle(index, value));	
		},
		removeList: (index) => {
			dispatch(removeList(index));	
		},
		changeAddValue: (value) => {
			dispatch(changeAddValue(value));	
		},
		addItem: (value, listId) => {
			dispatch(addItem(value, listId));	
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
