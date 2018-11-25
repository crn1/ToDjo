import React from 'react';
import { connect } from 'react-redux';
import { addList } from '../actions/ListsActions';

import {ToDjo} from '../components/ToDjo';

class ToDjoContainer extends React.Component {
	render() {
		return (
			<ToDjo addList={this.props.addList} />
		)
	}
}

const mapStateToProps = (state) => {
	return {
		lists: state.ListsReducer
	};
};
	
const mapDispatchToProps = (dispatch) => {
	return {
		addList: (title) => {
			dispatch(addList(title));	
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDjoContainer);
