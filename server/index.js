const express = require('express');
const fs = require('fs');

// eslint-disable-next-line no-magic-numbers
const port = process.env.PORT || 5000;
const app = express();

app.get('/data', (req, res) => {
  const { folder, subfolder, post } = req.query;
  var file = fs.readFileSync(`./posts/${folder}/${subfolder}/${post}.md`, 'utf8');
  res.set('Content-type', 'text/plain');
  // eslint-disable-next-line global-require
  res.send(file.toString());
});

app.listen(port);

// eslint-disable-next-line no-console
console.log(`SERVER: Listening on port ${port}`);