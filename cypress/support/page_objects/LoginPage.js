// cypress/support/page_objects/LoginPage.js

import BasePage from './BasePage';

class LoginPage extends BasePage {
  // Elementos
  get loginEmail() { return cy.get('[data-qa="login-email"]'); }
  get loginPassword() { return cy.get('[data-qa="login-password"]'); }
  get loginButton() { return cy.get('[data-qa="login-button"]'); }
  get loginForm() { return cy.get('.login-form'); }

  // Métodos
  navigateToSignupLogin() {
    cy.get('#header').contains('Signup / Login').should('be.visible').click();
  }

  loginUser(email, password) {
    this.loginEmail.type(email);
    this.loginPassword.type(password);
    this.loginButton.click();
  }
  
  verifyLoginCompleted() {
    cy.get('#header').contains('Logout').should('be.visible');
  }

  verifyEmailOrPasswordIsIncorrect() {
    this.loginForm.should('be.visible').and('contain.text', 'Your email or password is incorrect!');
  }
}

export default LoginPage;
