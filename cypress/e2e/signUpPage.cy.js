import {
  getEmailInput,
  getPasswordInput,
  getSubmitButton,
  getByTestID,
} from './helpers';

describe('auth/sign-up page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/auth/sign-up');
    cy.clearCookies();
  });

  it('Has valid attrs attrs', () => {
    const form = cy.get('form');
    form.should('have.attr', 'id', 'regform');

    const emailInput = getEmailInput();
    emailInput.should('have.attr', 'autocomplete', 'email');
    emailInput.should('have.attr', 'type', 'email');

    const passwordInput = getPasswordInput();
    passwordInput.should('have.attr', 'autocomplete', 'new-password');
    passwordInput.should('have.attr', 'type', 'password');

    const submitButton = getSubmitButton();
    submitButton.should('have.attr', 'type', 'submit');

    const signInLink = getByTestID('sign-in-link');
    signInLink.should('have.attr', 'href', '/auth/sign-in');
  });

  it('successfully signs up', () => {
    const emailInput = getEmailInput();
    emailInput.type('test2@mail.com');

    const passwordInput = getPasswordInput();
    passwordInput.type('qwerty1234');

    const submitButton = getSubmitButton();
    submitButton.click().then(() => {
      cy.wait(3000);
      cy.url().should('eq', 'http://localhost:3000/');
      cy.getCookie('token').should('have.property', 'value');
    });
  });

  it('shows "User already exists"', () => {
    const emailInput = getEmailInput();
    emailInput.type('test@mail.com');

    const passwordInput = getPasswordInput();
    passwordInput.type('qwerty1234');

    const submitButton = getSubmitButton();
    submitButton.click().then(() => {
      cy.wait(3000);
      const errorLabel = getByTestID('form-error-label');
      errorLabel.contains('User already exists');
    });
  });

  it('Navigates to sign up page', () => {
    const signUpLink = getByTestID('sign-in-link');
    signUpLink.click().then(() => {
      cy.url().should('include', '/auth/sign-in');
    });
  });
});
