/* eslint-disable no-magic-numbers */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import ClueIcon from '@material-ui/icons/Widgets';
import { withStyles } from '@material-ui/core/styles';

import PaytmButton from '../PayButton/PayButton';
import styles from './styles';
class Page extends Component {
  getClues() {
    const { app: { clues } } = this.props;
    if(!clues.length) return <PaytmButton amount={9} />;
    return clues.map((clue, i) => <Typography variant="subtitle2" key={i}>{i+1}: <i>{clue}</i></Typography>);
  }
  render() {
    const { classes } = this.props;
    return <div style={{ marginTop: 20 }}>
      <ClueIcon className={classes.clueIcon} />
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