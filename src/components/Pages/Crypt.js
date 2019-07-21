import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'md5';
import Typography from '@material-ui/core/Typography';
import CryptIcon from '@material-ui/icons/Extension';
import { withStyles } from '@material-ui/core/styles';

import Content from '../Content/Content';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import styles from './styles';

import { getQuestion, setAnswerError, updateUserLevel } from '../../data/app/appActions';
import Answer from './Answer';

class Page extends Component {
  componentDidMount() {
    const { getQuestion } = this.props;
    getQuestion();
  }
  handleAnswerSubmit(givenAnswer) {
    /* eslint-disable no-magic-numbers */
    const { app: { answer }, setAnswerError, updateUserLevel } = this.props;
    if (md5(givenAnswer.toLowerCase()) === answer) {
      updateUserLevel();
    } else {
      setAnswerError('Wrong answer. Try again!', 'error');
    }
  }
  handleErrorClose() {
    const { setAnswerError } = this.props;
    setAnswerError(null);
  }
  render() {
    const { classes, app: { question, error } } = this.props;
    return <React.Fragment>
      {error && error.message && <ErrorMessage variant={error.type} message={error.message} duration={2000} handleErrorClose={this.handleErrorClose.bind(this)}/>}
      <Content>
        <CryptIcon className={classes.homeIcon} />
        <Typography variant="overline">Crypt</Typography>
        <Typography variant="h6" className={classes.question}>{question}</Typography>
        <Answer handleAnswerSubmit={this.handleAnswerSubmit.bind(this)} />
      </Content>
    </React.Fragment>;
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  getQuestion: () => dispatch(getQuestion()),
  setAnswerError: (msg, type) => dispatch(setAnswerError(msg, type)),
  updateUserLevel: () => dispatch(updateUserLevel()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Page));