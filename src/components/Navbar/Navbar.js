import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

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
      <AppBar id="navbar" className={classes.appBar} elevation={0} position={'static'}>
        <Toolbar className={classes.toolBar}>
          {/* <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={onNavbarMenuClick}
            className={classes.menuButton}>
            <MenuIcon className={classes.menuIcon} />
          </IconButton> */}
          <img alt="logo" src="./img/logo-56.png" className={classNames(classes.logoIcon, 'rotate')} />
          <Typography variant="h6" className={classes.title} color="textSecondary" noWrap onClick={onNavbarTitleClick}>{title}</Typography>
          <a className={classes.flex} href="https://play.google.com/store/apps/details?id=com.londonz.app&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
            <img
              style={{ margin: 'auto', display: 'block', height: 40 }}
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_gb/badges/images/generic/en_badge_web_generic.png" />
          </a>
          <Typography variant="body2" color="inherit" className={classNames(classes.italics )} noWrap>{description}</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Navbar);
