## jsDrome - The Optimised Isomorphic Progressive React Firebase Boilerplate Web App.

The goal of this repository is to be able to spin up a boilerplate codebase for an Isomorphic Progressive Web App deployable in Google cloud. This specific use case is a blog app made suitable for search engines.

 - It uses React 16, React Router 4, Material in the view layer.

 - Redux, Isomorphic-fetch in the data layer.

 - Express in the server side.

 - Webpack 4, Webpack Dev Server to build the client code and server code.

 - Karma, Jasmine, Enzyme, Sinon for Unit testing.

 - Puppeteer, Cypress for Integration testing.

 - Lighthouse for Performance testing.

 - Browserstack for Cross-browser testing.

 - JsDoc documentation generation.

 - Circle CI for Continous Integration and Deployment.

 - Firebase as the backend.

 - Optimised for the Google Search Engine.

 - Eslint, editorconfig, commit message linting.


## Lighthouse report without any throttling.

 ![lighthouse output](https://github.com/jsdrome/isomorphic-pwa-firebase/blob/master/assets/site/lighthouse.png?raw=true "lighthouse output")


## Configurables.

- `package.json`
- `src/config/variables.js`
- `.firebaserc`
- `server.js` (function name)
- `templates/server.html`- Google Tag Manager ID
- `cypress.json`

## Environment variables

- CYPRESS_TOKEN
- BROWSERSTACK_USER
- BROWSERSTACK_TOKEN
- FIREBASE_TOKEN
- CODECOV_TOKEN