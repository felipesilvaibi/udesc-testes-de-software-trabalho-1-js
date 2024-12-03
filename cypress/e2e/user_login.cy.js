// cypress/e2e/user_login.cy.js

import LoginPage from '../support/page_objects/LoginPage';

const loginPage = new LoginPage();

describe('RT002 - Login de Usuário', function () {
  let loginData;
  let registerData;

  before(function () {
    cy.fixture('registerData').then((registerDataFixture) => {
      registerData = registerDataFixture;
      cy.fixture('loginData').then((loginDataFixture) => {
        loginData = loginDataFixture;

        const registrationInput = registerData.validRegistration;

        cy.register(registrationInput);

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
      loginPage.navigateToSignupLogin();
    });

    it('Preencher o campo "Email Address" com o email do usuário', function () {
      loginPage.loginEmail.type(input.email);
    });

    it('Preencher o campo "Password" com a senha do usuário', function () {
      loginPage.loginPassword.type(input.password);
    });

    it('Clicar no botão "Login"', function () {
      loginPage.loginButton.click();
    });

    it('Verificar se o login foi efetuado com sucesso.', function () {
      loginPage.verifyLoginCompleted();
    });

    after(function () {
      loginPage.logout();
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
      loginPage.navigateToSignupLogin();
    });

    it('Preencher o campo "Email Address" com o email do usuário', function () {
      loginPage.loginEmail.type(input.email);
    });

    it('Preencher o campo "Password" com a senha incorreta', function () {
      loginPage.loginPassword.type(input.password);
    });

    it('Clicar no botão "Login"', function () {
      loginPage.loginButton.click();
    });

    it('Verificar se o sistema exibe a mensagem de erro: "Your email or password is incorrect!"', function () {
      loginPage.verifyEmailOrPasswordIsIncorrect();
    });
  });

  after(function() {
    const input = loginData.loginCredentials.validLogin;

    cy.login(input.email, input.password);
    cy.deleteAccount();
  });
});
