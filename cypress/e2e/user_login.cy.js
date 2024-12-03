// cypress/e2e/user_login.cy.js

import LoginForm from '../support/forms/LoginForm';

const loginForm = new LoginForm();

describe('RT002 - Login de Usuário', function () {
  let loginData;
  let signupData;

  before(function () {
    cy.fixture('signupData').then((signupDataFixture) => {
      signupData = signupDataFixture;
      cy.fixture('loginData').then((loginDataFixture) => {
        loginData = loginDataFixture;

        const registrationInput = signupData.validSignupData;

        cy.signup(registrationInput);

        cy.get('[data-qa="continue-button"]').click();
        cy.logout();
      });
    });
  });

  describe('CT003 - Login com credenciais válidas', function () {
    let input;

    before(function () {
      input = loginData.loginCredentials.validLogin;
    });

    it('Acessar o site https://automationexercise.com/', function () {
      cy.visit('/');
    });

    it('Clicar no botão "Signup / Login"', function () {
      loginForm.navigateToSignupLogin();
    });

    it('Preencher o campo "Email Address" com o email do usuário', function () {
      loginForm.loginEmail.type(input.email);
    });

    it('Preencher o campo "Password" com a senha do usuário', function () {
      loginForm.loginPassword.type(input.password);
    });

    it('Clicar no botão "Login"', function () {
      loginForm.loginButton.click();
    });

    it('Verificar se o login foi efetuado com sucesso.', function () {
      loginForm.verifyLoginCompleted();
    });

    after(function () {
      loginForm.logout();
    });
  });

  describe('CT004 - Login com senha incorreta', function () {
    let input;

    before(function () {
      input = loginData.loginCredentials.invalidLogin;
    });

    it('Acessar o site https://automationexercise.com/', function () {
      cy.visit('/');
    });

    it('Clicar no botão "Signup / Login"', function () {
      loginForm.navigateToSignupLogin();
    });

    it('Preencher o campo "Email Address" com o email do usuário', function () {
      loginForm.loginEmail.type(input.email);
    });

    it('Preencher o campo "Password" com a senha incorreta', function () {
      loginForm.loginPassword.type(input.password);
    });

    it('Clicar no botão "Login"', function () {
      loginForm.loginButton.click();
    });

    it('Verificar se o sistema exibe a mensagem de erro: "Your email or password is incorrect!"', function () {
      loginForm.verifyEmailOrPasswordIsIncorrect();
    });
  });

  after(function() {
    const input = loginData.loginCredentials.validLogin;

    cy.login(input.email, input.password);
    cy.deleteAccount();
  });
});
