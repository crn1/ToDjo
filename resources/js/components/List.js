import React from 'react';
import TodoContainer from '../containers/TodoContainer.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export const List = (props) => {
	return (
		<Card>
			<CardContent>
				<Typography gutterBottom>
				<input
					index={props.index}
					type="text"
					value={props.title}
					onChange={e => props.changeTitle(e.target.getAttribute('index'), e.target.value)}
					style={{border: 0, fontSize: 20, }}
				/>
				</Typography>
				<TodoContainer />
			</CardContent>
		</Card>
	);
}
