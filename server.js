require('ignore-styles');
import * as functions from 'firebase-functions';
import express from 'express';
import React from 'react';
import fs from 'fs';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import { StaticRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import moment from 'moment';

import ErrorBoundary from './src/components/ErrorBoundary/ErrorBoundary';
import AppShell from './src/components/AppShell/AppShell';

import theme from './src/config/theme';
import store from './src/data/store';

import { getMetaTags } from './src/utils/helpers';

const { themeColor, author, seo: { keywords }, og: { ogImageAlt, ogType, ogFbAppId } } = require('./src/config/variables');

const template = fs.readFileSync('./templates/server.html', 'utf8');
const app = express();

app.get('/data', (req, res) => {
  const { folder, subfolder, post } = req.query;
  var file = fs.readFileSync(`./posts/${folder}/${subfolder}/${post}.md`, 'utf8');
  res.set('Content-type', 'text/plain');
  // eslint-disable-next-line global-require
  res.send(file.toString());
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