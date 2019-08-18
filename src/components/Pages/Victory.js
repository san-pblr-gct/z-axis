/* eslint-disable no-magic-numbers */
import React, { Component } from 'react';
import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import ShareIcon from '@material-ui/icons/Share';
// import Reset from '@material-ui/icons/Refresh';
import moment from 'moment';
// import classNames from 'classnames';

const totalTime = (s, e) => moment(e).diff(s, 'hours');

class Victory extends Component {
  render() {
    const { startTime, endTime } = this.props;
    const time = totalTime(startTime, endTime);
    const percent = Math.ceil(time / 6) + 1;
    const shareMessage = `I have successfully completed the Z Axis Challenge in under ${time + 1} ${time ? 'hours' : 'hour'}. Its your turn now.`;

    return <div>
      <List dense>
        <img style={{ width: 200, margin: '10px auto', display: 'block' }} src={'/img/victory.gif'} />
        <Typography variant="h6" style={{ textAlign: 'center', margin: 10 }}>Congratulations!</Typography>
        <Typography variant="subtitle1" style={{ textAlign: 'center', margin: 30 }}>{`You have completed the Z Axis Challenge. It took you just under ${time + 1} ${time ? 'hours' : 'hour'} to complete this. And that means you are in the top ${percent}% of the people who have cleared this.`}</Typography>
        <Typography style={{ textAlign: 'center', margin: 30 }}>Now its your turn to pass on the challenge.</Typography>
        <div style={{ width: 76, margin: 'auto' }}>
          {/* <Fab style={{ margin: 10 }} color={'primary'} onClick={() => this.props.handleRefreshOpen()} aria-label="share" name="share">
            <span className="hidden-accessiiblity">Reset</span>
            <Reset />
          </Fab> */}
          <Fab style={{ margin: 10 }} color={'primary'} onClick={() => this.props.onShare(shareMessage)} aria-label="share" name="share">
            <ShareIcon />
          </Fab>
        </div>
      </List>
    </div>
  }
}

export default Victory;