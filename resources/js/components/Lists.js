import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListContainer from '../containers/ListContainer';

export const Lists = (props) => {
	if(!props.lists) return null;
	return (
		<Grid container style={{marginTop: 10}} spacing={16}>
				{ props.lists.map((list, index) => 
					<Grid item xs={12} sm={6} lg={4} xl={3}>
						<ListContainer
							index={list.get('index')}
							key={index}
							title={list.get('title')} 
							addValue={list.get('addValue')}
						/>
					</Grid> 
				) }
		</Grid>
	);
}
