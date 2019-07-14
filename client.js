import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import ErrorBoundary from './src/components/ErrorBoundary/ErrorBoundary';
import AppShell from './src/components/AppShell/AppShell';
import Page from './src/components/Page/Page';

import './src/utils/webShare';

import theme from './src/config/theme';
import store from './src/data/store';

import './assets/site/favicon.ico';
import './assets/site/logo-56.png';
import './assets/site/logo-100.png';
import './assets/site/logo-192.png';
import './assets/site/logo-512.png';
import './assets/site/og_image.jpg';
import './assets/site/og_image_2.jpg';

function Main() {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) jssStyles.parentNode.removeChild(jssStyles);
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <ErrorBoundary>
          <ReduxProvider store={store}>
            <AppShell>
              <Switch>
                <Route exact path="/post/:folder/:subfolder/:post" component={Page} />
                <Route path="/" component={Page} />
              </Switch>
            </AppShell>
          </ReduxProvider>
        </ErrorBoundary>
      </Router>
    </MuiThemeProvider>
  );
}

render(<Main />, document.querySelector('#root'));

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  /* eslint-disable no-console */
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => { console.log('SW registered: ', registration); })
      .catch(registrationError => { console.log('SW registration failed: ', registrationError); });
  });
}

if (module.hot) module.hot.accept();