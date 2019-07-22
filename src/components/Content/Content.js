import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Help';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import ShareIcon from '@material-ui/icons/Share';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { RulesContent } from '../Pages/Rules';
import styles from './styles';

const { title: mainTitle, description: mainDescription, url } = require('../../config/variables');

class PaperSheet extends React.Component {
  state = {
    open: false,
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleShareClick = () => {
    const { app: { level } } = this.props;
    if (navigator && navigator.share) navigator.share({
      title: `Level ${level} | ${mainTitle}`,
      text: mainDescription,
      url,
    });
  }

  render() {
    const { classes, children } = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Paper className={classes.root} elevation={1}>
          <Fab className={classNames(classes.fab)} color={'primary'} onClick={this.handleShareClick} aria-label="share" name="share">
            <span className="hidden-accessiiblity">Share</span>
            <ShareIcon />
          </Fab>
          <div className={classes.green} onClick={this.handleClickOpen}>
            <InfoIcon style={{ padding: 13 }} />
          </div>
          {children}
        </Paper>
        <Dialog
          fullScreen={true}
          open={this.state.open}
          onClose={this.handleClose}
          style={{ margin: 30 }}
          aria-labelledby="response-dialog-title">
          <DialogTitle id="response-dialog-title">{"Rules"}</DialogTitle>
          <DialogContent>
            <RulesContent />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      </main>
    );
  }
}

export default withStyles(styles)(PaperSheet);
