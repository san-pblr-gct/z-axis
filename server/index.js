const express = require('express');
const bodyParser = require('body-parser');
const genchecksum = require('../crypt');

// eslint-disable-next-line no-magic-numbers
const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/checksum', (req, res) => {
  const key = 'qvXqT6z5tSKDjWXh';
  genchecksum(req.body, key, cs => res.send(cs));
});

app.listen(port);

// eslint-disable-next-line no-console
console.log(`SERVER: Listening on port ${port}`);