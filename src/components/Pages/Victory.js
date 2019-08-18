import React, { Component } from 'react';
import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import ShareIcon from '@material-ui/icons/Share';
import Reset from '@material-ui/icons/Refresh';
import moment from 'moment';
// import classNames from 'classnames';

const totalTime = (s, e) => moment(e).diff(s, 'hours');

class Victory extends Component {
  render() {
    const { startTime, endTime } = this.props;
    const time = totalTime(startTime, endTime);
    // eslint-disable-next-line no-magic-numbers
    const percent = Math.ceil(time / 6);

    return <div>
      <List dense>
        <img style={{ width: 200, margin: '10px auto', display: 'block' }} src={'/img/victory.gif'} />
        <Typography variant="h6" style={{ textAlign: 'center', margin: 10 }}>Congratulations!</Typography>
        <Typography variant="subtitle1" style={{ textAlign: 'center', margin: '30px 20px 50px' }}>{`You have completed all the levels of Z Axis successfully. It took you ${time} hours to complete this. You are in the top ${percent}% of the people who have cleared all levels.`}</Typography>
        {/* <Typography style={{ textAlign: 'center', margin: '10px' }}>Go ahead and set this as screenshot.</Typography> */}
        <div style={{ width: 160, margin: 'auto' }}>
          <Fab style={{ margin: 10 }} color={'primary'} onClick={() => this.props.handleRefreshOpen()} aria-label="share" name="share">
            <span className="hidden-accessiiblity">Reset</span>
            <Reset />
          </Fab>
          <Fab style={{ margin: 10 }} color={'primary'} onClick={() => this.props.onShare(time)} aria-label="share" name="share">
            <ShareIcon />
          </Fab>
        </div>
      </List>
    </div>
  }
}

export default Victory;