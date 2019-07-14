import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import NestedList from '../NestedList/NestedList';

const links = require('../../config/links');
import styles from './styles';

class SidebarContent extends Component {
  state = {
    selectedList: -1,
    selectedListItem: -1,
  }
  onSelect(i, j) {
    this.setState({
      selectedList: i,
      selectedListItem: j,
    })
  }
  isSelected(i, j, title) {
    const { selectedList, selectedListItem } = this.state;
    return (i === selectedList && j === selectedListItem) || this.props.selectedLink === title;
  }
  render() {
    const { classes, selectedList, onLinkClick } = this.props;

    return <div className={classes.root}>
      {/* eslint-disable-next-line no-magic-numbers */}
      {links.slice(1).map((item, i) => item.links.length ? <NestedList key={i} title={`${item.title}`} className={classes.nestedList} open={item.title === selectedList}>
        {item.links.map((link, j) => <ListItem key={j} component={Link} onClick={() => this.onSelect(i, j, link.title)} className={this.isSelected(i, j, link.title) ? classes.activeListItem : classes.nestedListItem} to={link.route}>
          <ListItemText secondary={link.title} className={classes.nestedListItemText} onClick={onLinkClick}/>
        </ListItem>)}
      </NestedList> : null)}
    </div>;
  }
}

export default withStyles(styles, { withTheme : true })(SidebarContent);