/* eslint-disable no-magic-numbers */
const express = require('express');
const bodyParser = require('body-parser');
const genchecksum = require('../crypt');

// eslint-disable-next-line no-magic-numbers
const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/checksum', (req, res) => {
  // const key = 'qvXqT6z5tSKDjWXh';
  const key = 'qWzN4AATjzd8pRPC'; // test
  const { body } = req;
  body['TXN_AMOUNT'] = body['TXN_AMOUNT'].toFixed(2).toString();
  genchecksum(body, key, cs => res.send(cs));
});

app.post('/paymentprocess', (req, res) => {
  if(req.body.STATUS && req.body.STATUS === 'TXN_SUCCESS' && req.body.MID === 'lzSXOq48634307639622') {
    return res.redirect(302, '/?payment=true');
  }
  return res.redirect(302, '/?payment=false');
});

app.listen(port);

// eslint-disable-next-line no-console
console.log(`SERVER: Listening on port ${port}`);