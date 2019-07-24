import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Answer extends Component {
  state = {
    answer: '',
  }
  handleAnswerChange(e) {
    this.setState({
      answer: e.target.value.toLowerCase().trimStart(),
    });
  }
  handleFormSubmit(e) {
    const { handleAnswerSubmit } = this.props;
    e.preventDefault();
    handleAnswerSubmit && handleAnswerSubmit(this.state.answer);
    this.setState({
      answer: '',
    });
  }
  render() {
    const { helperText = '', disabled = 'false' } = this.props;

    return <form onSubmit={this.handleFormSubmit.bind(this)}>
      <Grid container spacing={10}>
        <Grid item xs={9} sm={10} >
          <TextField
            id="filled-helperText"
            label="Answer"
            InputProps={{ autoComplete: "off" }}
            value={this.state.answer}
            style={{ margin: 'auto', width: '100%', marginBottom: 15 }}
            placeholder="Type in your answer here"
            helperText={helperText}
            margin="normal"
            InputLabelProps={{ shrink: true }}
            onChange={this.handleAnswerChange.bind(this)}
            variant="filled"
            disabled={Boolean(!disabled)} />
        </Grid>
        <Grid item xs={3} sm={2}>
          <Button variant="contained" color="primary" onClick={this.handleFormSubmit.bind(this)} style={{ height: 53, float: 'right' }} disabled={Boolean(!disabled)}>
            <SendIcon />
          </Button>
        </Grid>
      </Grid>
    </form>;
  }
}

export default Answer;