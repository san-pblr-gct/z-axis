/* eslint-disable no-magic-numbers */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import CryptIcon from '@material-ui/icons/Extension';
import { withStyles } from '@material-ui/core/styles';

import Content from '../Content/Content';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Clues from './Clue';
import styles from './styles';

import { getQuestion, setAnswerError, updateUserLevel, checkPayment, checkAnswer } from '../../data/app/appActions';
import Answer from './Answer';

class Page extends Component {
  componentDidMount() {
    const { getQuestion, checkPayment } = this.props;
    getQuestion();
    checkPayment();
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
    const { classes, app: { question, error, level } } = this.props;
    return <React.Fragment>
      {error && error.message && <ErrorMessage variant={error.type} message={error.message} duration={2000} handleErrorClose={this.handleErrorClose.bind(this)}/>}
      <Content>
        <CryptIcon className={classes.homeIcon} />
        <Typography className={classes.pageTitle1} variant="caption">{`Level ${level}`}</Typography>
        <Typography variant="h6" className={classes.question}>{question}</Typography>
        <Answer handleAnswerSubmit={this.handleAnswerSubmit.bind(this)} helperText={''}/>
        <Clues />
      </Content>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Page));