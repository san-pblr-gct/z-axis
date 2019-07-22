/* eslint-disable no-magic-numbers */
const express = require('express');
const bodyParser = require('body-parser');
const genchecksum = require('../crypt');

// eslint-disable-next-line no-magic-numbers
const port = process.env.PORT || 5000;
const app = express();

const { paymentEnv } = require('../src/config/variables');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/checksum', (req, res) => {
  const key = paymentEnv === 'test' ? process.env.PAYTM_TEST_KEY : process.env.PAYTM_KEY;
  const { body } = req;
  genchecksum(body, key, cs => res.send(cs));
});

app.post('/paymentprocess', (req, res) => {
  if(req.body.STATUS && req.body.STATUS === 'TXN_SUCCESS') {
    return res.redirect(302, '/?payment=true');
  }
  return res.redirect(302, '/?payment=false');
});

app.listen(port);

// eslint-disable-next-line no-console
console.log(`SERVER: Listening on port ${port}`);