class RegisterForm {
  elements = {
    deleteAccountUrl: () => cy.get('#header').contains('Delete Account'), 
    signUpName: () => cy.get('[data-qa="signup-name"]'),
    signUpEmail: () => cy.get('[data-qa="signup-email"]'),
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
    signupLoginUrl: () => cy.get('#header').contains('Signup / Login'), 
    signupButton: () => cy.get('[data-qa="signup-button"]'),
    createAccountButton: () => cy.get('[data-qa="create-account"]'),
    accountCreatedMessage: () => cy.get('[data-qa="account-created"]')
  }

  typeSignUpName(name) {
    if(!name) return
    this.elements.signUpName().type(name)
  }

  typeSignUpEmail(email) {
    if(!email) return
    this.elements.signUpEmail().type(email)
  }

  clickTitle(title) {
    if (!title) return;
    this.elements.title(title).check();
  }

  typePassword(password) {
    if(!password) return
    this.elements.password().type(password)
  }

  selectDobDay(dobDay) {
    if(!dobDay) return
    this.elements.dobDay().select(dobDay)
  }

  selectDobMonth(dobMonth) {
    if(!dobMonth) return
    this.elements.dobMonth().select(dobMonth)
  }

  selectDobYear(dobYear) {
    if(!dobYear) return
    this.elements.dobYear().select(dobYear)
  }

  typeFirstName(firstName) {
    if(!firstName) return
    this.elements.firstName().type(firstName)
  }

  typeLastName(lastName) {
    if(!lastName) return
    this.elements.lastName().type(lastName)
  }

  typeCompany(company) {
    if(!company) return
    this.elements.company().type(company)
  }

  typeAddress(address) {
    if(!address) return
    this.elements.address().type(address)
  }

  typeAddress2(address2) {
    if(!address2) return
    this.elements.address2().type(address2)
  }

  selectCountry(country) {
    if(!country) return
    this.elements.country().select(country)
  }

  typeCity(city) {
    if(!city) return
    this.elements.city().type(city)
  }

  typeState(state) {
    if(!state) return
    this.elements.state().type(state)
  }

  typeZipcode(zipcode) {
    if(!zipcode) return
    this.elements.zipcode().type(zipcode)
  }

  typeMobileNumber(mobileNumber) {
    if(!mobileNumber) return
    this.elements.mobileNumber().type(mobileNumber)
  }

  clickSignupLoginUrl() {
    this.elements.signupLoginUrl().click()
  }

  clickSignupButton() {
    this.elements.signupButton().click()
  }

  clickCreateAccountButton() {
    this.elements.createAccountButton().click()
  }

  assertAccountCreatedMessage() {
    this.elements.accountCreatedMessage().should('be.visible')
  }

  clickDeleteAccountUrl() {
    this.elements.deleteAccountUrl().click()
  }

}
const registerForm = new RegisterForm()

describe('Registro de Novo Usuário', () => {

  before('Acessar o site https://automationexercise.com/', () => {
    cy.visit('/')
  })

  after('Deletar a conta criada', () => {
    cy.get('[data-qa="continue-button"]').click()
    registerForm.clickDeleteAccountUrl()
  })  

  describe('Registro com dados válidos', () => {
    const input = {
      "title": "Mr",
      "name": "Udesc",
      "email": "udesc@exemplo.com",
      "password": "SenhaSegura123",
      "dobDay": "20",
      "dobMonth": "August",
      "dobYear": "1990",
      "firstName": "Udesc",
      "lastName": "Ceavi",
      "company": "Udesc",
      "address": "Rua das Flores",
      "address2": "123",
      "country": "United States",
      "city": "São Paulo",
      "state": "SP",
      "zipcode": "01000-000",
      "mobileNumber": "11999998888"
    }    

    it('Clicar no botão "Signup / Login"', () => {
      registerForm.clickSignupLoginUrl()
    })

    it('Na seção "New User Signup!", preencher o campo "Name" com o nome do usuário', () => {
      registerForm.typeSignUpName(input.name)
    })    

    it('Preencher o campo "Email Address" com o email do usuário', () => {
      registerForm.typeSignUpEmail(input.email)
    })      

    it('Clicar no botão "Signup"', () => {
      registerForm.clickSignupButton()
    })     
    
    it('Preencher todos os campos obrigatórios no formulário de registro.', () => {
      registerForm.clickTitle(input.title)
      registerForm.typePassword(input.password)
      registerForm.selectDobDay(input.dobDay)
      registerForm.selectDobMonth(input.dobMonth)
      registerForm.selectDobYear(input.dobYear)
      registerForm.typeFirstName(input.name)
      registerForm.typeLastName(input.lastName)
      registerForm.typeCompany(input.company)
      registerForm.typeAddress(input.address)
      registerForm.typeAddress2(input.address2)
      registerForm.selectCountry(input.country)
      registerForm.typeCity(input.city)
      registerForm.typeState(input.state)
      registerForm.typeZipcode(input.zipcode)
      registerForm.typeMobileNumber(input.mobileNumber)
    })    
    
    it('Clicar no botão "Create Account"', () => {
      registerForm.clickCreateAccountButton()
    })      

    it('Verificar se a conta foi criada com sucesso.', () => {
      registerForm.assertAccountCreatedMessage()
    })         

  })
})