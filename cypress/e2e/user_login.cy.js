// cypress/e2e/user_login.cy.js

import RegisterForm from '../support/page_objects/RegisterForm'

const registerForm = new RegisterForm()

describe('RT002 - Login de Usuário', function () {
  let loginData;

  before(function () {
    // Carrega as fixtures antes de todos os testes
    cy.fixture('registerData').then((registerData) => {
      cy.fixture('loginData').then((loginDataFixture) => {
        loginData = loginDataFixture;

        // Acessa os dados de registro válidos da fixture
        const registrationInput = registerData.validRegistration;

        // Realiza o cadastro do usuário
        cy.visit('/');

        registerForm.navigateToSignupLogin();
        registerForm.typeSignUpName(registrationInput.name);
        registerForm.typeSignUpEmail(registrationInput.email);
        registerForm.clickSignupButton();
        registerForm.fillRegistrationForm(registrationInput);
        registerForm.clickCreateAccountButton();
        registerForm.verifyAccountCreated();
        registerForm.navigation.continueButton().click();
        registerForm.logout();
      });
    });
  });

  // Teste CT003: Login com credenciais válidas
  describe('CT003 - Login com credenciais válidas', function () {
    let input;

    before(function () {
      // Acessa os dados de login válidos da fixture
      input = loginData.loginCredentials.validLogin;
    });

    it('Acessar o site https://automationexercise.com/', function () {
      cy.visit('/');
    });

    it('Clicar no botão "Signup / Login"', function () {
      registerForm.navigateToSignupLogin();
    });

    it('Preencher o campo "Email Address" com o email do usuário', function () {
      registerForm.login.loginEmail().type(input.email);
    });

    it('Preencher o campo "Password" com a senha do usuário', function () {
      registerForm.login.loginPassword().type(input.password);
    });

    it('Clicar no botão "Login"', function () {
      registerForm.login.loginButton().click();
    });

    it('Verificar se o login foi efetuado com sucesso.', function () {
      registerForm.verifyLoginCompleted();
    });

    after(function () {
      // Desloga o usuário
      registerForm.logout();
    });
  });

  // Teste CT004: Login com senha incorreta
  describe('CT004 - Login com senha incorreta', function () {
    let input;

    before(function () {
      // Acessa os dados de login inválidos da fixture
      input = loginData.loginCredentials.invalidLogin;
    });

    it('Acessar o site https://automationexercise.com/', function () {
      cy.visit('/');
    });

    it('Clicar no botão "Signup / Login"', function () {
      registerForm.navigateToSignupLogin();
    });

    it('Preencher o campo "Email Address" com o email do usuário', function () {
      registerForm.login.loginEmail().type(input.email);
    });

    it('Preencher o campo "Password" com a senha incorreta', function () {
      registerForm.login.loginPassword().type(input.password);
    });

    it('Clicar no botão "Login"', function () {
      registerForm.login.loginButton().click();
    });

    it('Verificar se o sistema exibe a mensagem de erro: "Your email or password is incorrect!"', function () {
      registerForm.verifyEmailOrPasswordIsIncorrect();
    });
  });

  after(function() {
    // Deleta a conta criada
    const input = loginData.loginCredentials.validLogin;

    cy.visit('/');
    registerForm.navigateToSignupLogin();
    registerForm.loginUser(input.email, input.password);
    registerForm.deleteAccount();
  });
});
