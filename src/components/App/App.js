import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Fab from '@material-ui/core/Fab';
import ShareIcon from '@material-ui/icons/Share';
import classNames from 'classnames';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import RightSidebar from '../RightSidebar/RightSidebar';
import Post from '../Post/Post';
import Footer from '../Footer/Footer';
import FullpageLoader from '../FullpageLoader/FullpageLoader';
// import RightSidebarContent from '../SidebarContent/RightSidebarContent';
import { getContent } from '../../data/app/appActions';

import styles from './styles';
import SidebarContent from '../SidebarContent/SidebarContent';
import { getMetaTags } from '../../utils/helpers';

const { title: mainTitle, description: mainDescription, og: { ogImage : mainOgImage } } = require('../../config/variables');

class App extends Component {
  state = {
    drawerOpen: false,
    activeTab: '0',
  };
  componentDidMount() {
    const { getContent, match: { params: { folder, subfolder, post } } } = this.props;
    getContent(folder, subfolder, post);
  }
  componentDidUpdate(prevProps) {
    const { match: { params: { folder, subfolder, post } }, getContent } = this.props;
    const { match: { params: { post: prevPost } } } = prevProps;
    if (post !== prevPost) {
      this.setState({ drawerOpen: false });
      getContent(folder, subfolder, post);
    }
  }
  handleDrawerToggle() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }
  handleTabChange(value) {
    this.setState({ activeTab: value });
  }
  handleNavbarTitleClick() {
    this.props.history.push('/')
  }
  handleShareClick() {
    if (navigator && navigator.share) navigator.share({
      title: mainTitle,
      text: mainDescription,
      url: window ? window.location.href : '',
    });
  }
  render() {
    const { classes, app: { content, error }, match: { params: { folder = 'home', subfolder = 'home', post = 'home' } } } = this.props;
    const { drawerOpen, activeTab } = this.state;
    const { title, ogTitle, ogUrl, selectedListTitle, selectedLinkTitle, description = mainDescription, ogDescription = mainDescription, ogImage = mainOgImage } = getMetaTags(folder, subfolder, post);

    return <div>
      <noscript>
        <ErrorMessage
          variant={'error'}
          message={"Please enable Javascript to continue."} />
      </noscript>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={ogTitle} />
        <meta property="og:url" content={ogUrl} />
        <meta property="description" content={description} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
      </Helmet>
      <Navbar title={mainTitle} description={mainDescription} onNavbarMenuClick={this.handleDrawerToggle.bind(this)} onNavbarTitleClick={this.handleNavbarTitleClick.bind(this)} />
      <Sidebar drawerOpen={drawerOpen} handleDrawerToggle={this.handleDrawerToggle.bind(this)}>
        <SidebarContent activeSection={activeTab} selectedList={selectedListTitle} selectedLink={selectedLinkTitle} />
      </Sidebar>
      <div className={classes.app}>
        <div className={classes.contentWrapper}>
          <Grid container spacing={0}>
            <Grid item xs={12} lg={9} className={classes.content}>
              {content[`${folder}/${subfolder}/${post}`] && <Post>{content[`${folder}/${subfolder}/${post}`]}</Post>}
              {!error && !content[`${folder}/${subfolder}/${post}`] && <FullpageLoader />}
              {error && <ErrorMessage
                variant={'error'}
                message={"Some error occured. Please try again later."} />}
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

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  getContent: (folder, subfolder, post) => dispatch(getContent(folder, subfolder, post)),
});

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, mapDispatchToProps)(App));