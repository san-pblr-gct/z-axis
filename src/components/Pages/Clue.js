/* eslint-disable no-magic-numbers */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
class Page extends Component {

  getClues() {
    const { app: { clues } } = this.props;
    return clues.map((clue, i) => <Typography variant="subtitle2" key={i}>{i + 1}: <i>{clue}</i></Typography>);
  }
  render() {
    const { app: { checksum }, classes } = this.props;
    return !checksum ? null : <div style={{ marginTop: 20 }}>
      {/* <ClueIcon className={classes.clueIcon} /> */}
      <div className={classes.pageTitle}>
        {this.getClues()}
      </div>
    </div>;
  }
}

const mapStateToProps = state => state;
// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Page));