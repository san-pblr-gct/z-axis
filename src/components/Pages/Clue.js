import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import ClueIcon from '@material-ui/icons/Widgets';
import { withStyles } from '@material-ui/core/styles';

import Content from '../Content/Content';
import styles from './styles';

import { getContent } from '../../data/app/appActions';

class Page extends Component {
  render() {
    const { classes } = this.props;
    return <Content>
      <ClueIcon className={classes.clueIcon} />
      <Typography variant="overline">Clue</Typography>
    </Content>;
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  getContent: (folder, subfolder, post) => dispatch(getContent(folder, subfolder, post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Page));