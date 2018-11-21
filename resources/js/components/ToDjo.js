import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import ListsContainer from '../containers/ListsContainer';

export const ToDjo = (props) => {
	return (
		<div>
			<AppBar position='static' color='default'>
				<Toolbar>
					<Typography style={{margin: '0px auto'}} align='center' variant="h6" color="inherit">
						ToDjo
					</Typography>
					<Tooltip title="Dodaj ToDjo listu">
						<IconButton
							color="inherit"
							onClick={() => props.addList('Nova lista')}
						 >
							<AddIcon />
						 </IconButton>
					</Tooltip>
				</Toolbar>
			</AppBar>
			<ListsContainer />
		</div>
	)
}
