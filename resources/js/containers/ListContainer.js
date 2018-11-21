import React from 'react';
import {connect} from 'react-redux';
import {changeTitle} from '../actions/ListsActions.js';
import {List} from '../components/List.js';

class ListContainer extends React.Component {
	render() {
		return (
			<List
				changeTitle={this.props.changeTitle}
				title={this.props.title}
				index={this.props.index}
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
