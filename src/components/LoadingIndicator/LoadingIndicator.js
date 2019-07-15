import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    // eslint-disable-next-line no-magic-numbers
    margin: theme.spacing(2),
    color: 'white',
  },
});

const LoadingIndicator = () => {
  // const { classes } = props;
  return <div className="logo">
    <img alt="logo" className="logoIcon rotate" src="/img/logo-56.png" />
    <div className="typewriter">
      <p>Think out of the box!</p>
    </div>
  </div>;
  // return <CircularProgress className={classes.progress} />;
};

export default withStyles(styles)(LoadingIndicator);
