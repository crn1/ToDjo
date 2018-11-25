import { List, Map } from 'immutable';
import React from 'react';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';

export const Todo = (props) =>
{
	return (
		<FormGroup>
			{ props.items.map((item, index) => {
				if(props.listId == item.get('listId'))
				{
					return(	
						<FormControlLabel
							control = {
								<div key={index} index={index}>

									<Checkbox
										onChange={(event) => props.changeChecked(
											event.target.parentElement.parentElement.parentElement.getAttribute('index'),
											event.target.checked
										)}
										checked={item.get('checked')}
									/>

									<input
										onChange={(event) => props.changeValue(
											event.target.parentElement.getAttribute('index'),
											event.target.value
										)}
										type="text"
										value={item.get('value')}
										style={{border: '0'}}
									/>

									<Button stlye={{float: 'right'}}
										onClick={(event) => props.removeItem(
											event.target.parentElement.getAttribute('index')
										)}
										size="small"
										color="secondary"
										aria-label="Izbriši stavku"
									>
										<ClearIcon />
									</Button>						  

								</div>
							}
						/>
					);
				}	
			})}
		</FormGroup>
	);
}
