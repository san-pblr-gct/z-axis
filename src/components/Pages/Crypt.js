/* eslint-disable no-magic-numbers */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import CryptIcon from '@material-ui/icons/Extension';
import { withStyles } from '@material-ui/core/styles';
import FullpageLoader from '../FullpageLoader/FullpageLoader';
import Content from '../Content/Content';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import InfoIcon from '@material-ui/icons/Help';
import DialogBox from '../DialogBox/DialogBox';
import Fab from '@material-ui/core/Fab';
import ShareIcon from '@material-ui/icons/Share';
import Reset from '@material-ui/icons/Refresh';
import classNames from 'classnames';
import Clues from './Clue';
import { RulesContent } from '../Pages/Rules';
import { RefreshContent } from '../Pages/Refresh';
import Answer from './Answer';
import Pay from './Pay';
import Victory from './Victory';

import styles from './styles';

import { getQuestion, setAnswerError, updateUserLevel, checkPayment, checkAnswer, resetLevels } from '../../data/app/appActions';

const { title: mainTitle, description: mainDescription, url } = require('../../config/variables');

class Page extends Component {
  state = {
    rules: false,
    reset: false,
  };

  componentDidMount() {
    const { getQuestion, checkPayment } = this.props;
    getQuestion();
    checkPayment();
  }

  handleRulesOpen = () => {
    this.setState({ rules: true });
  };

  handleRefreshOpen = () => {
    this.setState({ reset: true });
  };

  handleClose = () => {
    this.setState({
      rules: false,
      reset: false,
    });
  };

  handleResetAgree = () => {
    const { resetLevels } = this.props;
    this.handleClose();
    resetLevels();
  }

  handleShareClick = () => {
    if (navigator && navigator.share) navigator.share({
      title: mainTitle,
      text: mainDescription,
      url,
    });
  }

  handleVictoryShareClick = message => {
    if (navigator && navigator.share) navigator.share({
      title: mainTitle,
      text: message,
      url,
    });
  }

  handleAnswerSubmit(givenAnswer) {
    const { checkAnswer } = this.props;
    checkAnswer(givenAnswer);
  }

  handleErrorClose() {
    const { setAnswerError } = this.props;
    setAnswerError(null);
  }

  render() {
    const { classes, app: { clues, question, error, level, loading, victory, startTime, endTime } } = this.props;

    return <React.Fragment>
      {error && error.message && <ErrorMessage variant={error.type} message={error.message} duration={2000} handleErrorClose={this.handleErrorClose.bind(this)} />}
      {loading && <FullpageLoader />}
      {!loading && victory && <Content>
        <Victory handleRefreshOpen={this.handleRefreshOpen} onShare={this.handleVictoryShareClick} startTime={startTime} endTime={endTime} />
        <DialogBox title="Reset Progress" open={this.state.reset} handleClose={this.handleClose} handleAgree={this.handleResetAgree}><RefreshContent /></DialogBox>
      </Content>}
      {!loading && !victory && <Content>
        <CryptIcon className={classes.homeIcon} />
        <Fab className={classNames(classes.fab)} color={'primary'} onClick={this.handleShareClick} aria-label="share" name="share">
          <span className="hidden-accessiiblity">Share</span>
          <ShareIcon />
        </Fab>
        <Fab className={classNames(classes.fab)} color={'primary'} onClick={this.handleRulesOpen} aria-label="share" name="share">
          <span className="hidden-accessiiblity">Share</span>
          <InfoIcon />
        </Fab>
        <Fab className={classNames(classes.fab)} color={'primary'} onClick={this.handleRefreshOpen} aria-label="share" name="share">
          <span className="hidden-accessiiblity">Reset</span>
          <Reset />
        </Fab>
        <Typography className={classes.pageTitle1} variant="caption">{`${level} / 10`}</Typography>
        <Typography variant="h6" className={classes.question}>{question}</Typography>
        <Answer handleAnswerSubmit={this.handleAnswerSubmit.bind(this)} helperText={''} />
        {clues.length ? <Clues /> : <Pay />}
      </Content>}

      <DialogBox title="Rules" open={this.state.rules} handleClose={this.handleClose} handleAgree={this.handleClose}><RulesContent /></DialogBox>
      <DialogBox title="Reset Progress" open={this.state.reset} handleClose={this.handleClose} handleAgree={this.handleResetAgree}><RefreshContent /></DialogBox>
    </React.Fragment>;
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  getQuestion: () => dispatch(getQuestion()),
  setAnswerError: (msg, type) => dispatch(setAnswerError(msg, type)),
  updateUserLevel: () => dispatch(updateUserLevel()),
  checkPayment: () => dispatch(checkPayment()),
  checkAnswer: givenAnswer => dispatch(checkAnswer(givenAnswer)),
  resetLevels: () => dispatch(resetLevels()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Page));