// cypress/support/page_objects/RegisterPage.js

import BasePage from './BasePage';

class RegisterPage extends BasePage {
  // Elementos
  get signUpName() { return cy.get('[data-qa="signup-name"]'); }
  get signUpEmail() { return cy.get('[data-qa="signup-email"]'); }
  get signupButton() { return cy.get('[data-qa="signup-button"]'); }
  get createAccountButton() { return cy.get('[data-qa="create-account"]'); }
  get accountCreatedMessage() { return cy.get('[data-qa="account-created"]'); }
  get signupForm() { return cy.get('.signup-form'); }
  
  // Campos do Formulário de Cadastro
  get title() { return cy.get('input[name="title"]'); }
  get password() { return cy.get('[data-qa="password"]'); }
  get dobDay() { return cy.get('[data-qa="days"]'); }
  get dobMonth() { return cy.get('[data-qa="months"]'); }
  get dobYear() { return cy.get('[data-qa="years"]'); }
  get firstName() { return cy.get('[data-qa="first_name"]'); }
  get lastName() { return cy.get('[data-qa="last_name"]'); }
  get company() { return cy.get('[data-qa="company"]'); }
  get address() { return cy.get('[data-qa="address"]'); }
  get address2() { return cy.get('[data-qa="address2"]'); }
  get country() { return cy.get('[data-qa="country"]'); }
  get city() { return cy.get('[data-qa="city"]'); }
  get state() { return cy.get('[data-qa="state"]'); }
  get zipcode() { return cy.get('[data-qa="zipcode"]'); }
  get mobileNumber() { return cy.get('[data-qa="mobile_number"]'); }

  // Métodos
  navigateToSignupLogin() {
    cy.get('#header').contains('Signup / Login').should('be.visible').click();
  }
  
  typeSignUpName(name) {
    this.signUpName.should('be.visible').type(name);
  }
  
  typeSignUpEmail(email) {
    this.signUpEmail.should('be.visible').type(email);
  }
  
  clickSignupButton() {
    this.signupButton.should('be.visible').click();
  }
  
  fillRegistrationForm(data) {
    this.title.filter(`[value="${data.title}"]`).check();
    this.password.type(data.password);
    this.dobDay.select(data.dobDay);
    this.dobMonth.select(data.dobMonth);
    this.dobYear.select(data.dobYear);
    this.firstName.type(data.firstName);
    this.lastName.type(data.lastName);
    this.company.type(data.company);
    this.address.type(data.address);
    this.address2.type(data.address2);
    this.country.select(data.country);
    this.state.type(data.state);
    this.city.type(data.city);
    this.zipcode.type(data.zipcode);
    this.mobileNumber.type(data.mobileNumber);
  }
  
  clickCreateAccountButton() {
    this.createAccountButton.should('be.visible').click();
  }
  
  verifyAccountCreated() {
    this.accountCreatedMessage.should('be.visible').and('contain.text', 'Account Created!');
  }
  
  verifyEmailAlreadyExists() {
    this.signupForm.should('be.visible').and('contain.text', 'Email Address already exist!');
  }
}

export default RegisterPage;
