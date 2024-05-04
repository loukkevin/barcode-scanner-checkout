import React from 'react';
import { List, ListItem, ListSubheader } from '@mui/material';

const ScanList = (props) => {
	return (
		<>
			<List
				subheader={
					<ListSubheader component='div' id='nested-list-subheader'>
						Scanned Items:
					</ListSubheader>
				}>
				{props.items.map((item) => {
					return <ListItem>{item}</ListItem>;
				})}
			</List>
		</>
	);
};

export default ScanList;
