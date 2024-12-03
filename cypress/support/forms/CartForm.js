// cypress/support/forms/CartForm.js

import BaseForm from './BaseForm';

class CartForm extends BaseForm {
  // Elementos
  get cartItems() { return cy.get('#cart_info_table tbody tr'); }
  get productName() { return cy.get('.cart_description h4 a'); }
  get productQuantity() { return cy.get('.cart_quantity button.disabled'); }

  // Métodos
  verifyProductInCart(productNameToVerify, quantity = 1) {
    this.cartItems.each(($el) => {
      cy.wrap($el).within(() => {
        cy.get('.cart_description h4 a').then(($name) => {
          if ($name.text().trim() === productNameToVerify) {
            cy.get('.cart_quantity button.disabled').should('have.text', quantity.toString());
          }
        });
      });
    });
  }

  verifyProductNotInCart(productNameToVerify) {
    cy.get('#cart_info_table tbody tr').within(() => {
      cy.contains('.cart_description h4 a', productNameToVerify).should('not.exist');
    });
  }
}

export default CartForm;
