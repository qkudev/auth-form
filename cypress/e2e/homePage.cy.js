describe('/ home page', () => {
  beforeEach(() => {
    cy.clearCookies();
  });

  it('redirects to sign in page', () => {
    cy.visit('http://localhost:3000/');
    cy.url().should('eq', 'http://localhost:3000/auth/sign-in');
  });
});
