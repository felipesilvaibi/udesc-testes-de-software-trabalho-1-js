// cypress/support/forms/CartForm.js

import BaseForm from './BaseForm';

class CartForm extends BaseForm {
  // Elementos
  get cartItems() { return cy.get('#cart_info_table tbody tr'); }
  get proceedToCheckoutButton() { return cy.contains('a.btn.btn-default.check_out', 'Proceed To Checkout'); }
  get emptyCartMessage() { return cy.get('#empty_cart p'); }

  // Métodos
  verifyProductInCart(productNameToVerify, quantity = 1) {
    cy.get('#cart_info_table tbody tr').each(($el) => {
      cy.wrap($el).within(() => {
        cy.get('.cart_description h4 a').then(($name) => {
          if ($name.text().trim() === productNameToVerify) {
            cy.get('.cart_quantity button.disabled').should('have.text', quantity.toString());
          }
        });
      });
    }).then(() => {
      cy.get('#cart_info_table tbody tr .cart_description h4 a')
        .should('contain.text', productNameToVerify);
    });
  }

  verifyProductNotInCart(productNameToVerify) {
    cy.get('#cart_info_table tbody tr .cart_description h4 a')
      .should('not.contain.text', productNameToVerify);
  }

  proceedToCheckout() {
    this.proceedToCheckoutButton.should('be.visible').click();
  }

  isCartEmpty() {
    this.emptyCartMessage.should('be.visible')
      .and('contain.text', 'Cart is empty!');
  }
}

export default CartForm;
