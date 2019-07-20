import React, { Suspense, lazy } from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MemoryRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import ErrorBoundary from './src/components/ErrorBoundary/ErrorBoundary';
import AppShell from './src/components/AppShell/AppShell';
import FullpageLoader from './src/components/FullpageLoader/FullpageLoader';

const Crypt = lazy(() => import('./src/components/Pages/Crypt'));
const Clue = lazy(() => import('./src/components/Pages/Clue'));
const Rules = lazy(() => import('./src/components/Pages/Rules'));

import './src/utils/webShare';

import theme from './src/config/theme';
import store from './src/data/store';

import './assets/site/favicon.ico';
import './assets/site/logo-56.png';
import './assets/site/logo-100.png';
import './assets/site/logo-192.png';
import './assets/site/logo-512.png';
import './assets/site/og_image.jpg';
import './assets/site/bg.jpg';
import './assets/site/bg2.jpg';
import './assets/social/instagram.svg';
import './assets/social/facebook.png';

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
            <Suspense fallback={<FullpageLoader />}>
              <Switch>
                <AppShell>
                  <Redirect path="/" to="/crypt" />
                  <Route exact path="/crypt" component={Crypt} />
                  <Route exact path="/clue" component={Clue} />
                  <Route exact path="/rules" component={Rules} />
                </AppShell>
              </Switch>
            </Suspense>
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