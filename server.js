/* eslint-disable no-magic-numbers */
import 'ignore-styles';
import * as functions from 'firebase-functions';
import express from 'express';
import React from 'react';
import fs from 'fs';
import crypto from 'crypto';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import { StaticRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import moment from 'moment';
import bodyParser from 'body-parser';

import ErrorBoundary from './src/components/ErrorBoundary/ErrorBoundary';
import AppShell from './src/components/AppShell/AppShell';

import theme from './src/config/theme';
import store from './src/data/store';

import { getMetaTags } from './src/utils/helpers';

const { themeColor, author, seo: { keywords }, og: { ogImageAlt, ogType, ogFbAppId } } = require('./src/config/variables');

const template = fs.readFileSync('./templates/server.html', 'utf8');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/paymentsuccess', (req, res) => {
  if(req.body.STATUS && req.body.STATUS === 'TXN_SUCCESS' && req.body.MID === 'lzSXOq48634307639622') {
    return res.redirect(302, '/?payment=true');
  }
  return res.redirect(302, '/?payment=false');
});

app.post('/checksum', (req, res) => {
  const key = 'qvXqT6z5tSKDjWXh';
  genchecksum(req.body, key, cs => res.send(cs));
});

app.get('**', (req, res) => {
  const sheets = new ServerStyleSheets();
  const html = ReactDOMServer.renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <Router location={req.url} context={{}}>
          <ErrorBoundary>
            <ReduxProvider store={store}>
              <AppShell />
            </ReduxProvider>
          </ErrorBoundary>
        </Router>
      </ThemeProvider>,
    ),
  );

  const css = sheets.toString().replace(/\n/g, " ");
  // eslint-disable-next-line no-magic-numbers
  const a = req.originalUrl.split('/').slice(2);
  const { title, ogTitle, description, ogDescription, ogUrl, ogImage } = getMetaTags(...a);
  const content = renderFullPage(html, css, title, ogTitle, ogUrl, description, ogDescription, ogImage);
  res.send(content);
});

const renderFullPage = (html, css, title, ogTitle, ogUrl, description, ogDescription, ogImage) => template
  .replace('<!-- html here -->', html)
  .replace('/* css here */', css)
  // variables
  .replace('<!--title here-->', title)
  .replace('<!--ogTitle here-->', ogTitle)
  .replace('<!--ogUrl here-->', ogUrl)
  .replace('<!--description here-->', description)
  .replace('<!--ogDescription here-->', ogDescription)
  .replace('<!--ogImage here-->', ogImage)
  // constants
  .replace('<!--author here-->', author)
  .replace('<!--keywords here-->', keywords)
  .replace('<!--ogType here-->', ogType)
  .replace('<!--ogImageAlt here-->', ogImageAlt)
  .replace('<!--themeColor here-->', themeColor)
  .replace('<!--fbAppId here-->', ogFbAppId)
  .replace('<!--date here-->', moment().format('YYYY-MM-DD'));

export let ssrApp = functions.https.onRequest(app);

const paramsToString = params => {
  var data = '';
  var tempKeys = Object.keys(params);
  tempKeys.sort();
  tempKeys.forEach(key => {
    data += params[key] + '|';
  });
  return data;
}

const encrypt = (data, key) => {
  var iv = '@@@@&&&&####$$$$';
  var algo = '256';
  switch (key.length) {
  case 16:
    algo = '128';
    break;
  case 24:
    algo = '192';
    break;
  case 32:
    algo = '256';
    break;

  }
  var cipher = crypto.createCipheriv('AES-' + algo + '-CBC', key, iv);
  var encrypted = cipher.update(data, 'binary', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
};

const genSalt = (length, cb) => {
  crypto.randomBytes((length * 3.0) / 4.0, (err, buf) => {
    var salt;
    if (!err) {
      salt = buf.toString("base64");
    }
    cb(err, salt);
  });
};

const genchecksum = (params, key, cb) => {
  var data = paramsToString(params);
  let encrypted;
  // eslint-disable-next-line handle-callback-err
  genSalt(4, function (err, salt) {
    var sha256 = crypto.createHash('sha256').update(data + salt).digest('hex');
    var checkSum = sha256 + salt;
    encrypted = encrypt(checkSum, key);
    cb(encrypted);
  });
};