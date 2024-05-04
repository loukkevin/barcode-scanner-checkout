import React from 'react';
import { List, ListItem } from '@mui/material'

const CustomerTotal = (props) => {

    return (
        <List>
            <ListItem>Last Scanned Item: {props.lastScanned}</ListItem>
            <ListItem>Total Items: {props.totalCount}</ListItem>
            <ListItem>Customer Total: ${props.totalValue}</ListItem>
        </List>
    );
}

export default CustomerTotal;