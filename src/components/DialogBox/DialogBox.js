import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class DialogBox extends React.Component {
  render() {
    const { children, open, handleClose, handleAgree, title } = this.props;
    return (
      <Dialog
        fullScreen={true}
        open={open}
        onClose={handleClose}
        style={{ margin: 30 }}
        aria-labelledby="response-dialog-title">
        <DialogTitle id="response-dialog-title">{title}</DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAgree} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DialogBox);