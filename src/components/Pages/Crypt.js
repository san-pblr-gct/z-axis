import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import CryptIcon from '@material-ui/icons/Extension';
import { withStyles } from '@material-ui/core/styles';

import Content from '../Content/Content';
import styles from './styles';

import { getContent } from '../../data/app/appActions';

class Page extends Component {
  render() {
    const { classes } = this.props;
    return <Content>
      <CryptIcon className={classes.homeIcon} />
      <Typography variant="overline">Crypt</Typography>
    </Content>;
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  getContent: (folder, subfolder, post) => dispatch(getContent(folder, subfolder, post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Page));