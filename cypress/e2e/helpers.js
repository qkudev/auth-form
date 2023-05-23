export const getByTestID = (testId) => cy.get(`[data-cy="${testId}"]`);

export const getEmailInput = () => getByTestID('email-input');
export const getPasswordInput = () => getByTestID('password-input');
export const getSubmitButton = () => getByTestID('submit-button');
