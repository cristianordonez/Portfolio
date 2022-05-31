/// <reference types="Cypress" />

describe('Navigation should work correctly', () => {
   it('Navigates to correct part of page', () => {
      cy.visit('/');
      cy.get('.landing-page-link').click();
      cy.url().should('include', '/home');
      cy.get('.sidebar-link').contains('Projects').click();
      cy.get('.project-list').should('be.visible');
      cy.get('.sidebar-link').contains('Contact').click();
      cy.get('.home-contact').should('be.visible');
   });
   it('Lazy loads the main content', () => {
      cy.visit('/');
      cy.get('.home-projects').should('not.exist');
      cy.get('.landing-page-link').click();
      cy.get('.home-projects').should('exist');
      cy.get('.home-projects').findByText('Projects').should('not.exist');
      cy.get('.home-contact').findByText('Contact').should('not.exist');
   });
});

describe('Form can be submitted successfully', () => {
   it('allows user to enter contact information', () => {
      cy.visit('/');
      cy.get('.landing-page-link').click();
      cy.get('.sidebar-link').contains('Contact').click();
      cy.get('.sidebar-link').contains('Contact').click();
      // cy.scrollIntoView('.home-contact');
   });
});
