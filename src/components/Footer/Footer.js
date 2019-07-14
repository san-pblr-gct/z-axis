import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SvgIcon from '@material-ui/core/SvgIcon';

import styles from './styles';

const HomeIcon = props => <SvgIcon {...props}>
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
</SvgIcon>;

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
      <BottomNavigation value={value} onChange={this.handleChange} showLabels className={classes.footer}>
        <BottomNavigationAction label="Home" value={'0'} icon={<HomeIcon />} />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles, { withTheme: true })(LabelBottomNavigation);