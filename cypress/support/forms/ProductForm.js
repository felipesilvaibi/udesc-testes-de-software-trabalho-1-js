// cypress/support/forms/ProductForm.js

import BaseForm from './BaseForm';

class ProductForm extends BaseForm {
  // Elementos
  get addToCartButton() { return cy.get('.btn.btn-default.cart'); }
  get confirmationModal() { return cy.get('#cartModal'); }
  get viewCartLink() { return this.confirmationModal.find('a').contains('View Cart'); }
  get confirmationMessage() { return this.confirmationModal.find('.modal-body p').first(); }

  // Métodos
  addToCart() {
    this.addToCartButton.should('be.visible').click();
  }

  confirmAddToCart() {
    this.confirmationModal.should('be.visible');
    this.confirmationMessage.should('contain.text', 'Your product has been added to cart.');
    this.viewCartLink.should('be.visible').click();
  }

  specifyQuantity(quantity) {
    cy.get('input#quantity').should('be.visible').clear().type(quantity.toString());
  }  
}

export default ProductForm;
