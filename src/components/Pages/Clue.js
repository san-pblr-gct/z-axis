import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import ClueIcon from '@material-ui/icons/Widgets';
import { withStyles } from '@material-ui/core/styles';

import Content from '../Content/Content';
import styles from './styles';

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
// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Page));