// cypress/support/page_objects/RegisterForm.js

class RegisterForm {
  // Seção de Navegação
  navigation = {
    signupLoginUrl: () => cy.get('#header').contains('Signup / Login'),
    logoutUrl: () => cy.get('#header').contains('Logout'),
    deleteAccountUrl: () => cy.get('#header').contains('Delete Account'),
    continueButton: () => cy.get('[data-qa="continue-button"]'),
    loginButton: () => cy.get('[data-qa="login-button"]'),
  }

  // Seção de Cadastro de Novo Usuário
  registration = {
    signUpName: () => cy.get('[data-qa="signup-name"]'),
    signUpEmail: () => cy.get('[data-qa="signup-email"]'),
    signupButton: () => cy.get('[data-qa="signup-button"]'),
    createAccountButton: () => cy.get('[data-qa="create-account"]'),
    accountCreatedMessage: () => cy.get('[data-qa="account-created"]'),
    signupForm: () => cy.get('.signup-form'),

    // Campos do Formulário de Cadastro
    title: (value) => cy.get(`input[name="title"][value="${value}"]`),
    password: () => cy.get('[data-qa="password"]'),
    dobDay: () => cy.get('[data-qa="days"]'),
    dobMonth: () => cy.get('[data-qa="months"]'),
    dobYear: () => cy.get('[data-qa="years"]'),
    firstName: () => cy.get('[data-qa="first_name"]'),
    lastName: () => cy.get('[data-qa="last_name"]'),
    company: () => cy.get('[data-qa="company"]'),
    address: () => cy.get('[data-qa="address"]'),
    address2: () => cy.get('[data-qa="address2"]'),
    country: () => cy.get('[data-qa="country"]'),
    city: () => cy.get('[data-qa="city"]'),
    state: () => cy.get('[data-qa="state"]'),
    zipcode: () => cy.get('[data-qa="zipcode"]'),
    mobileNumber: () => cy.get('[data-qa="mobile_number"]'),
  }

  // Seção de Login
  login = {
    loginEmail: () => cy.get('[data-qa="login-email"]'),
    loginPassword: () => cy.get('[data-qa="login-password"]'),
    loginButton: () => cy.get('[data-qa="login-button"]'),
    loginForm: () => cy.get('.login-form'),
  }

  // Métodos de Navegação
  navigateToSignupLogin() {
    this.navigation.signupLoginUrl()
      .should('be.visible')
      .click()
  }

  logout() {
    this.navigation.logoutUrl()
      .should('be.visible')
      .click()
  }

  deleteAccount() {
    this.navigation.deleteAccountUrl()
      .should('be.visible')
      .click()
  }

  clickContinueButton() {
    this.navigation.continueButton()
      .should('be.visible')
      .click()
  }

  // Métodos de Cadastro
  typeSignUpName(name) {
    if (name) {
      this.registration.signUpName()
        .should('be.visible')
        .type(name)
    }
  }

  typeSignUpEmail(email) {
    if (email) {
      this.registration.signUpEmail()
        .should('be.visible')
        .type(email)
    }
  }

  clickSignupButton() {
    this.registration.signupButton()
      .should('be.visible')
      .click()
  }

  fillRegistrationForm(data) {
    if (data.title) {
      this.registration.title(data.title)
        .should('be.visible')
        .check()
    }
    if (data.password) {
      this.registration.password()
        .should('be.visible')
        .type(data.password)
    }
    if (data.dobDay) {
      this.registration.dobDay()
        .should('be.visible')
        .select(data.dobDay)
    }
    if (data.dobMonth) {
      this.registration.dobMonth()
        .should('be.visible')
        .select(data.dobMonth)
    }
    if (data.dobYear) {
      this.registration.dobYear()
        .should('be.visible')
        .select(data.dobYear)
    }
    if (data.firstName) {
      this.registration.firstName()
        .should('be.visible')
        .type(data.firstName)
    }
    if (data.lastName) {
      this.registration.lastName()
        .should('be.visible')
        .type(data.lastName)
    }
    if (data.company) {
      this.registration.company()
        .should('be.visible')
        .type(data.company)
    }
    if (data.address) {
      this.registration.address()
        .should('be.visible')
        .type(data.address)
    }
    if (data.address2) {
      this.registration.address2()
        .should('be.visible')
        .type(data.address2)
    }
    if (data.country) {
      this.registration.country()
        .should('be.visible')
        .select(data.country)
    }
    if (data.city) {
      this.registration.city()
        .should('be.visible')
        .type(data.city)
    }
    if (data.state) {
      this.registration.state()
        .should('be.visible')
        .type(data.state)
    }
    if (data.zipcode) {
      this.registration.zipcode()
        .should('be.visible')
        .type(data.zipcode)
    }
    if (data.mobileNumber) {
      this.registration.mobileNumber()
        .should('be.visible')
        .type(data.mobileNumber)
    }
  }

  clickCreateAccountButton() {
    this.registration.createAccountButton()
      .should('be.visible')
      .click()
  }

  verifyAccountCreated() {
    this.registration.accountCreatedMessage()
      .should('be.visible')
      .and(($element) => {
        expect($element.text()).to.contain('Account Created!')
      })
  }

  verifyEmailAlreadyExists() {
    this.registration.signupForm()
      .should('be.visible')
      .and(($element) => {
        expect($element.text()).to.contain('Email Address already exist!')
    })
  }

  verifyLoginCompleted() {
    this.navigation.logoutUrl()
      .should('be.visible')
  }   

  verifyEmailOrPasswordIsIncorrect() {
    this.login.loginForm()
      .should('be.visible')
      .and(($element) => {
        expect($element.text()).to.contain('Your email or password is incorrect!')
        })
    }    

  // Métodos de Login
  loginUser(email, password) {
    if (email) {
      this.login.loginEmail()
        .should('be.visible')
        .type(email)
    }
    if (password) {
      this.login.loginPassword()
        .should('be.visible')
        .type(password)
    }
    this.login.loginButton()
      .should('be.visible')
      .click()
  }
}

export default RegisterForm
