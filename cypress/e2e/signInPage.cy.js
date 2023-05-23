import {
  getEmailInput,
  getPasswordInput,
  getSubmitButton,
  getByTestID,
} from './helpers';

describe('auth/sign-in page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/auth/sign-in');
    cy.clearCookies();
  });

  it('Has valid attrs attrs', () => {
    const emailInput = getEmailInput();
    emailInput.should('have.attr', 'autocomplete', 'email');
    emailInput.should('have.attr', 'type', 'email');

    const passwordInput = getPasswordInput();
    passwordInput.should('have.attr', 'autocomplete', 'current-password');
    passwordInput.should('have.attr', 'type', 'password');

    const submitButton = getSubmitButton();
    submitButton.should('have.attr', 'type', 'submit');

    const signUpLink = getByTestID('sign-up-link');
    signUpLink.should('have.attr', 'href', '/auth/sign-up');
  });

  it('successfully signs in', () => {
    const emailInput = getEmailInput();
    emailInput.type('test@mail.com');

    const passwordInput = getPasswordInput();
    passwordInput.type('qwerty1234');

    const submitButton = getSubmitButton();
    submitButton.click().then(() => {
      cy.wait(3000);
      cy.url().should('eq', 'http://localhost:3000/');
      cy.getCookie('token').should('have.property', 'value');
    });
  });

  it('shows "User not found"', () => {
    const emailInput = getEmailInput();
    emailInput.type('invalid@mail.com');

    const passwordInput = getPasswordInput();
    passwordInput.type('qwerty1234');

    const submitButton = getSubmitButton();
    submitButton.click();

    const errorLabel = getByTestID('form-error-label');
    errorLabel.contains('User not found');
  });

  it('Navigates to sign up page', () => {
    const signUpLink = getByTestID('sign-up-link');
    signUpLink.click().then(() => {
      cy.url().should('include', '/auth/sign-up');
    });
  });
});
