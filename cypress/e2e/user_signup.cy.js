// cypress/e2e/user_signup.cy.js

import RegisterForm from '../support/page_objects/RegisterForm'

const registerForm = new RegisterForm()

describe('RT001 - Registro de Novo Usuário', function () {
  let registerData;
  let loginData;

  before(function () {
    // Carrega as fixtures antes de todos os testes
    cy.fixture('registerData').then((data) => {
      registerData = data;
    });
    cy.fixture('loginData').then((data) => {
      loginData = data;
    });
  });

  // Primeiro cenário: Registro com dados válidos
  describe('CT001 - Registro com dados válidos', function () {
    let input;

    before(function () {
      // Acessa os dados de registro válidos da fixture
      input = registerData.validRegistration;
    });

    it('Acessar o site https://automationexercise.com/', function () {
      cy.visit('/');
    });

    it('Clicar no botão "Signup / Login"', function () {
      registerForm.navigateToSignupLogin();
    });

    it('Na seção "New User Signup!", preencher o campo "Name" com o nome do usuário', function () {
      registerForm.typeSignUpName(input.name);
    });

    it('Preencher o campo "Email Address" com o email do usuário', function () {
      registerForm.typeSignUpEmail(input.email);
    });

    it('Clicar no botão "Signup"', function () {
      registerForm.clickSignupButton();
    });

    it('Preencher todos os campos obrigatórios no formulário de registro.', function () {
      registerForm.fillRegistrationForm(input);
    });

    it('Clicar no botão "Create Account"', function () {
      registerForm.clickCreateAccountButton();
    });

    it('Verificar se a conta foi criada com sucesso.', function () {
      registerForm.verifyAccountCreated();
    });

    after('Deslogar a conta', function () {
      // Adicionar função logout corretamente
      registerForm.navigation.continueButton().click();
      registerForm.logout();
    });
  });

  // Segundo cenário: Registro com email já cadastrado
  describe('CT002 - Registro com email já cadastrado', function () {
    let input;

    before(function () {
      // Acessa os dados de registro duplicado da fixture
      input = registerData.duplicateEmailRegistration;
    });

    it('Acessar o site https://automationexercise.com/', function () {
      cy.visit('/');
    });

    it('Clicar no botão "Signup / Login"', function () {
      registerForm.navigateToSignupLogin();
    });

    it('Na seção "New User Signup!", preencher o campo "Name" com o nome do usuário', function () {
      registerForm.typeSignUpName(input.name);
    });

    it('Preencher o campo "Email Address" com o email do usuário', function () {
      registerForm.typeSignUpEmail(input.email);
    });

    it('Clicar no botão "Signup"', function () {
      registerForm.clickSignupButton();
    });

    it('Verificar se o sistema exibe a mensagem de erro: "Email Address already exist!"', function () {
      registerForm.verifyEmailAlreadyExists();
    });
  });

  after('Deletar a conta criada', function () {
      const loginCredentials = loginData.loginCredentials.validLogin;

      registerForm.loginUser(loginCredentials.email, loginCredentials.password);
      registerForm.deleteAccount();
  });  
});
