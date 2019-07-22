import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';

import styles from './styles';

const { title: mainTitle, description: mainDescription } = require('../../config/variables');

class App extends Component {
  state = {
  };
  handleDrawerToggle() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }
  handleNavbarTitleClick() {
    window.location = '/';
  }
  handleSidebarLinkClick() {
    if (this.state.drawerOpen) this.handleDrawerToggle();
  }
  render() {
    const { classes, children } = this.props;

    return <div>
      <noscript><ErrorMessage variant={'error'} message={"Please enable Javascript to continue."} /></noscript>
      <Navbar title={mainTitle} description={mainDescription} onNavbarMenuClick={this.handleDrawerToggle.bind(this)} onNavbarTitleClick={this.handleNavbarTitleClick.bind(this)} />
      <div className={classes.app}>
        <div className={classes.contentWrapper}>
          <Grid container spacing={0}>
            <Grid item xs={12} lg={9} className={classes.content}>
              {children}
            </Grid>
          </Grid>
        </div>
      </div>
      {/* <Footer /> */}
    </div>;
  }
}

export default withStyles(styles, { withTheme: true })(App);