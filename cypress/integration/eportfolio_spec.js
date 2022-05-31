/// <reference types="Cypress" />

describe('Navigation should work correctly', () => {
   it('Navigates to correct part of page', () => {
      cy.visit('/');
      cy.get('.landing-page-link').click();
      cy.url().should('include', '/about');
      cy.get('.sidebar-link').contains('Projects').click();
      cy.get('.project-list').should('be.visible');
      cy.get('.sidebar-link').contains('Contact').click();
      cy.get('.home-contact').should('be.visible');
   });
});

describe('Form can be submitted successfully', () => {
   it('allows user to enter contact information', () => {
      cy.intercept('POST', '/users*', {
         statusCode: 201,
         body: {
            name: 'Peter Pan',
         },
      });
      cy.visit('/');
      cy.get('.landing-page-link').click();
      cy.get('.sidebar-link').contains('Contact').click();
      cy.get('.contact-inner-container')
         .findByPlaceholderText('Name')
         .type('name')
         .should('have.value', 'name');
      cy.get('.contact-inner-container')
         .findByPlaceholderText('Email')
         .type('email@gmail.com')
         .should('have.value', 'email@gmail.com');
      cy.get('.contact-inner-container')
         .findByPlaceholderText('Subject')
         .type('test subject')
         .should('have.value', 'test subject');
      cy.get('.contact-inner-container')
         .findByPlaceholderText('Message')
         .type('this is a test message')
         .should('have.value', 'this is a test message');
      cy.get('.contact-inner-container')
         .findByTestId('submit-form-btn')
         .click();
      cy.contains(
         'Your message has been sent! I will get back to you as soon as possible.'
      ).should('be.visible');
   });

   it('does not allow user to submit form if there is a missing form item', () => {
      cy.visit('/');
      cy.get('.landing-page-link').click();
      cy.get('.sidebar-link').contains('Contact').click();
      cy.get('.contact-inner-container')
         .findByPlaceholderText('Email')
         .should('have.value', '');
      cy.get('.contact-inner-container')
         .findByTestId('submit-form-btn')
         .click();
      cy.get('input:invalid').should('have.length', 3);
   });
});

describe('External links work as expected', () => {
   it('should navigate to LinkedIn and Github pages', () => {
      cy.visit('/');
      cy.get('.landing-page-link').click();
      cy.get('.sidebar-icons').findByTestId('linkedin button').click();
      cy.url().should('include', '/about');
      cy.get('.sidebar-icons').findByTestId('github button').click();
      cy.url().should('include', 'about');
   });
});
