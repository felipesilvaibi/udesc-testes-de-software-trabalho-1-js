// cypress/e2e/user_signup.cy.js

import RegisterPage from '../support/page_objects/RegisterPage';

const registerPage = new RegisterPage();

describe('RT001 - Registro de Novo Usuário', function () {
  let registerData;
  let loginData;

  before(function () {
    cy.fixture('registerData').then((data) => {
      registerData = data;
    });
    cy.fixture('loginData').then((data) => {
      loginData = data;
    });
  });

  describe('CT001 - Registro com dados válidos', function () {
    let input;

    before(function () {
      input = registerData.validRegistration;
    });

    it('Acessar o site https://automationexercise.com/', function () {
      cy.visit('/');
    });

    it('Clicar no botão "Signup / Login"', function () {
      registerPage.navigateToSignupLogin();
    });

    it('Na seção "New User Signup!", preencher o campo "Name" com o nome do usuário', function () {
      registerPage.typeSignUpName(input.name);
    });

    it('Preencher o campo "Email Address" com o email do usuário', function () {
      registerPage.typeSignUpEmail(input.email);
    });

    it('Clicar no botão "Signup"', function () {
      registerPage.clickSignupButton();
    });

    it('Preencher todos os campos obrigatórios no formulário de registro.', function () {
      registerPage.fillRegistrationForm(input);
    });

    it('Clicar no botão "Create Account"', function () {
      registerPage.clickCreateAccountButton();
    });

    it('Verificar se a conta foi criada com sucesso.', function () {
      registerPage.verifyAccountCreated();
    });

    after('Deslogar a conta', function () {
      registerPage.clickContinueButton();
      registerPage.logout();
    });
  });

  describe('CT002 - Registro com email já cadastrado', function () {
    let input;

    before(function () {
      input = registerData.duplicateEmailRegistration;
    });

    it('Acessar o site https://automationexercise.com/', function () {
      cy.visit('/');
    });

    it('Clicar no botão "Signup / Login"', function () {
      registerPage.navigateToSignupLogin();
    });

    it('Na seção "New User Signup!", preencher o campo "Name" com o nome do usuário', function () {
      registerPage.typeSignUpName(input.name);
    });

    it('Preencher o campo "Email Address" com o email do usuário', function () {
      registerPage.typeSignUpEmail(input.email);
    });

    it('Clicar no botão "Signup"', function () {
      registerPage.clickSignupButton();
    });

    it('Verificar se o sistema exibe a mensagem de erro: "Email Address already exist!"', function () {
      registerPage.verifyEmailAlreadyExists();
    });
  });

  after('Deletar a conta criada', function () {
    const loginCredentials = loginData.loginCredentials.validLogin;

    cy.login(loginCredentials.email, loginCredentials.password);
    registerPage.deleteAccount();
  });  
});
