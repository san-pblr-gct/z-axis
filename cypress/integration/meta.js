/* eslint-disable no-magic-numbers */
/* eslint-disable no-undef */
import { url as mainUrl, stageUrl as url } from '../../src/config/variables';
import links from '../../src/config/links';

beforeEach(() => {
  if (window.navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations()
      .then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister();
        });
      });
  }
})

describe('My First Test', function () {
  it('Visits the Home page', function () {
    const post = links[0].links[0];
    cy.visit(url);
    cy.title().should('eq', post.title)
    cy.get('meta[name="description"]').should("have.attr", "content", post.description);
    cy.get('meta[property="og:description"]').should("have.attr", "content", post.ogDescription);
    cy.get('meta[property="og:title"]').should("have.attr", "content", post.ogTitle);
    cy.get('meta[property="og:url"]').should("have.attr", "content", mainUrl + '/');
    cy.get('meta[property="og:image"]').should("have.attr", "content", mainUrl + post.ogImage);
  })
});

describe('My First Test', function () {
  it('Visits the Post page', function () {
    const post = links[1].links[0];
    cy.visit(url + post.route);
    cy.title().should('eq', post.title)
    cy.get('meta[name="description"]').should("have.attr", "content", post.description);
    cy.get('meta[property="og:description"]').should("have.attr", "content", post.ogDescription);
    cy.get('meta[property="og:title"]').should("have.attr", "content", post.ogTitle);
    cy.get('meta[property="og:url"]').should("have.attr", "content", mainUrl + post.route);
    cy.get('meta[property="og:image"]').should("have.attr", "content", mainUrl + post.ogImage);
  })
});