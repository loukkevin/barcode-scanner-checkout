import React from 'react';
import {
	Divider,
	List,
	ListItem,
	ListSubheader,
	Typography,
} from '@mui/material';

const ScanList = (props) => {
	return (
		<>
			<List
				subheader={
					<ListSubheader component='div' id='nested-list-subheader'>
						<Typography variant='h5'>Scanned Items:</Typography>
						<Divider />
					</ListSubheader>
				}>
				{props.items.map((item) => {
					return (
						<>
							<ListItem key={item}>
								<Typography variant='subtitle1'>{item}</Typography>
							</ListItem>
							<Divider />
						</>
					);
				})}
			</List>
		</>
	);
};

export default ScanList;
