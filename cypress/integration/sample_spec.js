describe('Navigation should work correctly', () => {
   it('Navigates to correct part of page', () => {
      cy.visit('http://localhost:8080');
      cy.get('.landing-page-link').click();
      cy.url().should('include', '/home');
      cy.get('.sidebar-link').contains('Projects').click();
      cy.get('.project-list').should('be.visible');
      // cy.get('.home-contact').should('be.not.visible');
   });
});
