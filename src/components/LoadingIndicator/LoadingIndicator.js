import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    // eslint-disable-next-line no-magic-numbers
    margin: theme.spacing(2),
    color: 'white',
  },
});

const LoadingIndicator = props => {
  const { classes } = props;

  return <CircularProgress className={classes.progress} />;
};

export default withStyles(styles)(LoadingIndicator);
