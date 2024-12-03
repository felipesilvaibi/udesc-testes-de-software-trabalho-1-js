// cypress/support/forms/SearchForm.js

import BaseForm from './BaseForm';

class SearchForm extends BaseForm {
  // Elementos
  get searchBar() { return cy.get('#search_product'); }
  get searchButton() { return cy.get('#submit_search'); }
  get productCards() { return cy.get('.features_items .col-sm-4'); }

  // Métodos
  typeSearchTerm(searchTerm) {
    this.searchBar.should('be.visible').type(searchTerm);
  }

  clickSearchButton() {
    this.searchButton.should('be.visible').click();
  }

  verifyResultsFound() {
    this.productCards.should('have.length.greaterThan', 0);
  }

  verifyNoResultsFound() {
    this.productCards.should('have.length', 0);
  }
}

export default SearchForm;
