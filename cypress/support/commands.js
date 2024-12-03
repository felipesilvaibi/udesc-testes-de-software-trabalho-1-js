// cypress/support/commands.js

Cypress.Commands.add('signup', (userData) => {
  cy.visit('/');
  cy.get('#header').contains('Signup / Login').click();
  cy.get('[data-qa="signup-name"]').type(userData.name);
  cy.get('[data-qa="signup-email"]').type(userData.email);
  cy.get('[data-qa="signup-button"]').click();
  
  // Preenche o formulário de registro
  cy.get(`input[name="title"][value="${userData.title}"]`).check();
  cy.get('[data-qa="password"]').type(userData.password);
  cy.get('[data-qa="days"]').select(userData.dobDay);
  cy.get('[data-qa="months"]').select(userData.dobMonth);
  cy.get('[data-qa="years"]').select(userData.dobYear);
  cy.get('[data-qa="first_name"]').type(userData.firstName);
  cy.get('[data-qa="last_name"]').type(userData.lastName);
  cy.get('[data-qa="company"]').type(userData.company);
  cy.get('[data-qa="address"]').type(userData.address);
  cy.get('[data-qa="address2"]').type(userData.address2);
  cy.get('[data-qa="country"]').select(userData.country);
  cy.get('[data-qa="state"]').type(userData.state);
  cy.get('[data-qa="city"]').type(userData.city);
  cy.get('[data-qa="zipcode"]').type(userData.zipcode);
  cy.get('[data-qa="mobile_number"]').type(userData.mobileNumber);
  
  cy.get('[data-qa="create-account"]').click();
});

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/');
  cy.get('#header').contains('Signup / Login').click();
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(password);
  cy.get('[data-qa="login-button"]').click();
});

Cypress.Commands.add('logout', () => {
  cy.get('#header').contains('Logout').click();
});

Cypress.Commands.add('deleteAccount', () => {
  cy.get('#header').contains('Delete Account').click();
});
