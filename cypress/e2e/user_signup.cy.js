// cypress/e2e/user_signup.cy.js

import SignupForm from '../support/forms/SignupForm';

const signupForm = new SignupForm();

describe('RT001 - Registro de Novo Usuário', function () {
  let signupData;
  let loginData;

  before(function () {
    cy.fixture('signupData').then((data) => {
      signupData = data;
    });
    cy.fixture('loginData').then((data) => {
      loginData = data;
    });
  });

  describe('CT001 - Registro com dados válidos', function () {
    let input;

    before(function () {
      input = signupData.validSignupData;
    });

    it('Acessar o site https://automationexercise.com/', function () {
      cy.visit('/');
    });

    it('Clicar no botão "Signup / Login"', function () {
      signupForm.navigateToSignupLogin();
    });

    it('Na seção "New User Signup!", preencher o campo "Name" com o nome do usuário', function () {
      signupForm.typeSignUpName(input.name);
    });

    it('Preencher o campo "Email Address" com o email do usuário', function () {
      signupForm.typeSignUpEmail(input.email);
    });

    it('Clicar no botão "Signup"', function () {
      signupForm.clickSignupButton();
    });

    it('Preencher todos os campos obrigatórios no formulário de registro.', function () {
      signupForm.fillRegistrationForm(input);
    });

    it('Clicar no botão "Create Account"', function () {
      signupForm.clickCreateAccountButton();
    });

    it('Verificar se a conta foi criada com sucesso.', function () {
      signupForm.verifyAccountCreated();
    });

    after('Deslogar a conta', function () {
      signupForm.clickContinueButton();
      signupForm.logout();
    });
  });

  describe('CT002 - Registro com email já cadastrado', function () {
    let input;

    before(function () {
      input = signupData.duplicateEmailSignupData;
    });

    it('Acessar o site https://automationexercise.com/', function () {
      cy.visit('/');
    });

    it('Clicar no botão "Signup / Login"', function () {
      signupForm.navigateToSignupLogin();
    });

    it('Na seção "New User Signup!", preencher o campo "Name" com o nome do usuário', function () {
      signupForm.typeSignUpName(input.name);
    });

    it('Preencher o campo "Email Address" com o email do usuário', function () {
      signupForm.typeSignUpEmail(input.email);
    });

    it('Clicar no botão "Signup"', function () {
      signupForm.clickSignupButton();
    });

    it('Verificar se o sistema exibe a mensagem de erro: "Email Address already exist!"', function () {
      signupForm.verifyEmailAlreadyExists();
    });
  });

  after('Deletar a conta criada', function () {
    const loginCredentials = loginData.loginCredentials.validLogin;

    cy.login(loginCredentials.email, loginCredentials.password);
    signupForm.deleteAccount();
  });  
});
