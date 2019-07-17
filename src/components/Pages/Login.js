import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Content from '../Content/Content';
import styles from './styles';

import { getContent } from '../../data/app/appActions';

class Page extends Component {
  render() {
    return <Content>
      <Typography variant="overline">Login</Typography>
    </Content>;
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  getContent: (folder, subfolder, post) => dispatch(getContent(folder, subfolder, post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Page));