const express = require('express');

// eslint-disable-next-line no-magic-numbers
const port = process.env.PORT || 5000;
const app = express();

const questions = [ {
  question: 'q',
  answer: '',
} ];

app.get('/question', (req, res) => {
  const { level } = req.query;
  // eslint-disable-next-line no-magic-numbers
  res.send(JSON.stringify(questions[level - 1]));
});

app.listen(port);

// eslint-disable-next-line no-console
console.log(`SERVER: Listening on port ${port}`);