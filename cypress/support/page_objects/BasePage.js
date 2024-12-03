// cypress/support/page_objects/BasePage.js

class BasePage {
  get header() { return cy.get('#header'); }
  get logoutUrl() { return this.header.contains('Logout'); }
  get deleteAccountUrl() { return this.header.contains('Delete Account'); }
  get continueButton() { return cy.get('[data-qa="continue-button"]'); }
  
  logout() {
    this.logoutUrl.should('be.visible').click();
  }

  deleteAccount() {
    this.deleteAccountUrl.should('be.visible').click();
  }

  clickContinueButton() {
    this.continueButton.should('be.visible').click();
  }
}

export default BasePage;
