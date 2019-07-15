import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import Post from '../Post/Post';
import FullpageLoader from '../FullpageLoader/FullpageLoader';
// import RightSidebarContent from '../SidebarContent/RightSidebarContent';
import { getContent } from '../../data/app/appActions';

// import SidebarContent from '../SidebarContent/SidebarContent';
import { getMetaTags } from '../../utils/helpers';

const { description: mainDescription, og: { ogImage: mainOgImage } } = require('../../config/variables');

class Page extends Component {
  componentDidMount() {
    this.getContent();
  }
  componentDidUpdate(prevProps) {
    const { match: { params: { post } } } = this.props;
    const { match: { params: { post: prevPost } } } = prevProps;
    if (post !== prevPost) {
      this.setState({ drawerOpen: false });
      this.getContent();
    }
  }
  getContent() {
    const { match: { params: { folder = 'home', subfolder = 'home', post = 'home' } }, getContent } = this.props;
    getContent(folder, subfolder, post);
  }
  render() {
    const { app: { content, error }, match: { params: { folder = 'home', subfolder = 'home', post = 'home' } } } = this.props;
    const { title, ogTitle, ogUrl, /* selectedList, selectedLink, */ description = mainDescription, ogDescription = mainDescription, ogImage = mainOgImage } = getMetaTags(folder, subfolder, post);
    return <div>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={ogTitle} />
        <meta property="og:url" content={ogUrl} />
        <meta name="description" content={description} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
      </Helmet>
      {content[`${folder}/${subfolder}/${post}`] && <Post>{content[`${folder}/${subfolder}/${post}`]}</Post>}
      {!error && !content[`${folder}/${subfolder}/${post}`] && <FullpageLoader />}
      {error && <ErrorMessage variant={'error'} message={"Some error occured. Please try again later."} />}
    </div >;
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  getContent: (folder, subfolder, post) => dispatch(getContent(folder, subfolder, post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);