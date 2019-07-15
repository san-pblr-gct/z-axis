import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ExtensionIcon from '@material-ui/icons/Extension';
import WidgetIcon from '@material-ui/icons/Widgets';
import { Link } from 'react-router-dom';

import styles from './styles';

class LabelBottomNavigation extends React.Component {
  state = {
    value: this.props.activeTab,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.handleTabChange(value);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.footer}>
        <Link to="/"><BottomNavigationAction label="" value={'0'} icon={<ExtensionIcon className={classes.icon} />} /></Link>
        <Link to="/clue"><BottomNavigationAction label="" value={'1'} icon={<WidgetIcon className={classes.icon} />} /></Link>
        <Link to="/rules"><BottomNavigationAction label="" value={'1'} icon={<WidgetIcon className={classes.icon} />} /></Link>
      </BottomNavigation>
    );
  }
}

export default withStyles(styles, { withTheme: true })(LabelBottomNavigation);