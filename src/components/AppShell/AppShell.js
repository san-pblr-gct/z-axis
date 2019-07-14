import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Fab from '@material-ui/core/Fab';
import ShareIcon from '@material-ui/icons/Share';
import classNames from 'classnames';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import RightSidebar from '../RightSidebar/RightSidebar';
import Footer from '../Footer/Footer';
import SidebarContent from '../SidebarContent/SidebarContent';
// import RightSidebarContent from '../SidebarContent/RightSidebarContent';

import styles from './styles';

const { title: mainTitle, description: mainDescription } = require('../../config/variables');

class App extends Component {
  state = {
    drawerOpen: false,
    activeTab: '0',
  };
  handleDrawerToggle() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }
  handleTabChange(value) {
    this.setState({ activeTab: value });
  }
  handleNavbarTitleClick() {
    window.location = '/';
  }
  handleShareClick() {
    if (navigator && navigator.share) navigator.share({
      title: mainTitle,
      text: mainDescription,
      url: window ? window.location.href : '',
    });
  }
  handleSidebarLinkClick() {
    if (this.state.drawerOpen) this.handleDrawerToggle();
  }
  render() {
    const { classes, children } = this.props;
    const { drawerOpen, activeTab } = this.state;

    return <div>
      <noscript><ErrorMessage variant={'error'} message={"Please enable Javascript to continue."} /></noscript>
      <Navbar title={mainTitle} description={mainDescription} onNavbarMenuClick={this.handleDrawerToggle.bind(this)} onNavbarTitleClick={this.handleNavbarTitleClick.bind(this)} />
      <Sidebar drawerOpen={drawerOpen} handleDrawerToggle={this.handleDrawerToggle.bind(this)}>
        <SidebarContent onLinkClick={this.handleSidebarLinkClick.bind(this)}/>
      </Sidebar>
      <div className={classes.app}>
        <div className={classes.contentWrapper}>
          <Grid container spacing={0}>
            <Grid item xs={12} lg={9} className={classes.content}>
              {children}
            </Grid>
            <Hidden mdDown implementation="css">
              <Grid item className={classes.sidebar}>
                <RightSidebar>
                  {/* <RightSidebarContent /> */}
                </RightSidebar>
              </Grid>
            </Hidden>
          </Grid>
        </div>
      </div>
      <Fab className={classNames(classes.fab)} color={'primary'} onClick={this.handleShareClick} aria-label="share" name="share">
        <span className="hidden-accessiiblity">Share</span>
        <ShareIcon />
      </Fab>
      <Footer handleTabChange={this.handleTabChange.bind(this)} activeTab={activeTab} />
    </div>;
  }
}

export default withStyles(styles, { withTheme: true })(App);