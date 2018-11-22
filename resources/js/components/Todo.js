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
			{ props.items.map((item, i) => 
				<FormControlLabel
					control = {
						<div>
							<Checkbox
								key={i}
								index={i}
								onChange={(e) => props.changeChecked(e.target.checked)}
								checked={item.get('checked')}
							/>
							<input
								key={i}
								index={i}
								onChange={(e) => props.changeValue(e.target.index, e.target.value)}
								type="text"
								value={item.get('value')}
								style={{border: '0'}}
							/>
							<Button stlye={{float: 'right'}}
								key={i}
								index={i}
								onClick={(e) => props.removeItem(e.target.index)}
								size="small"
								color="secondary"
								aria-label="Izbriši stavku"
							>
								<ClearIcon />
							</Button>						  
						</div>
					}
				/>
			)}
			<FormControlLabel
				control = {
					<div>
						<Checkbox icon={<AddIcon />} />
						<input
							type="text"
							value={props.addValue}
							onChange={(e) => props.changeAddValue(e.target.value)}
							style={{border: '0'}}
							placeholder='Dodaj stavku'
							onBlur={(e) => props.addItem(e.target.value)}
						/>
					</div>
				}
			/>
		</FormGroup>
	);
}
