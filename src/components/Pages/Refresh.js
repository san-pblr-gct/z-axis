import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const MyListItem = ({ primary = null, secondary = null }) => <ListItem style={{ padding: 5 }} variant="subtitle1">
  <ListItemText primary={primary} secondary={secondary} />
</ListItem>;

export const RefreshContent = () => <List dense>
  <MyListItem primary="This will reset all your progress and you will be sent back to level 1." />
  <MyListItem primary="You will also lose the clues you have paid for." />
  <MyListItem primary="Are you sure?" />
</List>;