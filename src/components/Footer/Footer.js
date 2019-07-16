import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CryptIcon from '@material-ui/icons/Extension';
import ClueIcon from '@material-ui/icons/Widgets';
import RulesIcon from '@material-ui/icons/LiveHelp';
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
        <Link to="/"><BottomNavigationAction label="" value={'0'} icon={<CryptIcon className={classes.icon} />} /></Link>
        <Link to="/clue"><BottomNavigationAction label="" value={'1'} icon={<ClueIcon className={classes.icon} />} /></Link>
        <Link to="/rules"><BottomNavigationAction label="" value={'1'} icon={<RulesIcon className={classes.icon} />} /></Link>
      </BottomNavigation>
    );
  }
}

export default withStyles(styles, { withTheme: true })(LabelBottomNavigation);