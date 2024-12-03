// cypress/support/forms/ProductForm.js

import BaseForm from './BaseForm';

class ProductForm extends BaseForm {
  // Elementos
  get addToCartButton() { return cy.get('.btn.btn-default.cart'); }
  get confirmationModal() { return cy.get('#cartModal'); }
  get viewCartLink() { return this.confirmationModal.find('a').contains('View Cart'); }
  get confirmationMessage() { return this.confirmationModal.find('.modal-body p').first(); }
  get quantityInput() { return cy.get('input#quantity'); }

  // Métodos
  navigateToProductDetails(productName) {
    cy.contains('.productinfo.text-center p', productName)
      .should('be.visible')
      .closest('.col-sm-4')
      .within(() => {
        cy.contains('.choose a', 'View Product').should('be.visible').click();
      });
  }

  addToCart() {
    this.addToCartButton.should('be.visible').click();
  }

  confirmAddToCart() {
    this.confirmationModal.should('be.visible');
    this.confirmationMessage.should('contain.text', 'Your product has been added to cart.');
    this.viewCartLink.should('be.visible').click();
  }

  specifyQuantity(quantity) {
    this.quantityInput.should('be.visible').clear().type(quantity.toString());
  }
}

export default ProductForm;
