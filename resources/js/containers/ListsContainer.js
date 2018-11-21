import React from 'react';
import { connect } from 'react-redux';
import { addList } from '../actions/ListsActions';

import {Lists} from '../components/Lists';

class ListsContainer extends React.Component {
	render() {
		return (
			<Lists lists={this.props.lists} />
		);
	}
}

const mapStateToProps = (state) => {
	return {
		lists: state.ListsReducer
	};
};

export default connect(mapStateToProps)(ListsContainer);
