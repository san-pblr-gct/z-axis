import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Help';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

import { RulesContent } from '../Pages/Rules';
import styles from './styles';

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

  render() {
    const { classes, children } = this.props;

    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Paper className={classes.root} elevation={1}>
          <div className={classes.green} onClick={this.handleClickOpen}>
            <InfoIcon />
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
