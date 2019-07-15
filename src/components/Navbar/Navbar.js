import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import styles from './styles';

class Navbar extends React.Component {
  render() {
    const {
      classes,
      title = '',
      description = '',
      // onNavbarMenuClick,
      onNavbarTitleClick,
    } = this.props;

    return (
      <AppBar id="navbar" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          {/* <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={onNavbarMenuClick}
            className={classes.menuButton}>
            <MenuIcon className={classes.menuIcon} />
          </IconButton> */}
          <img alt="logo" src="/img/logo-56.png" className={classes.logoIcon} />
          <Typography variant="h6" color="textSecondary" className={classes.flex} noWrap onClick={onNavbarTitleClick}>{title}</Typography>
          <Typography variant="subtitle1" color="inherit" className={classes.italics} noWrap>{description}</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Navbar);
