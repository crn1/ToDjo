import React from 'react';
import TodoContainer from '../containers/TodoContainer.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import AddIcon from '@material-ui/icons/Add';

export const List = (props) => {
	return (
		<Card>
			<CardContent>
				<Typography gutterBottom>
					<input
						type="text"
						value={props.title}
						onChange={(event) => props.changeTitle(
							props.index, 
							event.target.value
						)}
						style={{border: 0, fontSize: 20, }}
					/>

					<Button stlye={{float: 'right'}}
						onClick={() => props.removeList(props.index)}
						size="small"
						color="secondary"
						aria-label="Izbriši listu"
					>
						<ClearIcon />
					</Button>						  

				</Typography>

				<TodoContainer listId={props.index} />

				<div>
					<Checkbox icon={<AddIcon />} />
					<input
						type="text"
						value={props.addValue}
						onChange={(event) => props.changeAddValue(
							props.index,
							event.target.value
						)}
						style={{border: '0'}}
						placeholder='Dodaj stavku'
						onBlur={(event) => props.addItem(event.target.value, props.index)}
					/>
				</div>

			</CardContent>
		</Card>
	);
}
