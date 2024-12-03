// cypress/e2e/add_to_cart.cy.js

import SearchForm from '../support/forms/SearchForm';
import ProductForm from '../support/forms/ProductForm';
import CartForm from '../support/forms/CartForm';

const searchForm = new SearchForm();
const productForm = new ProductForm();
const cartForm = new CartForm();

describe('RT004 - Adicionar Produto ao Carrinho', function () {
  let addToCartData;

  before(function () {
    cy.fixture('addToCartData').then((data) => {
      addToCartData = data.addToCart;
    });
  });

  describe('CT007 - Adicionar produto disponível ao carrinho', function () {
    before(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('Acessar o site https://automationexercise.com/', function () {
      cy.visit('/', { cacheBust: true });
    });

    it('Navegar até a página "Products".', function () {
      searchForm.navigateToProducts();
    });

    it('Selecionar o produto "Blue Top" e navegar para a página de detalhes.', function () {
      const productName = addToCartData.oneBlueTop.product;

      cy.contains('.productinfo.text-center p', productName)
        .should('be.visible')
        .closest('.col-sm-4')
        .within(() => {
          cy.contains('.choose a', 'View Product').should('be.visible').click();
        });
    });

    it('Adicionar o produto ao carrinho.', function () {
      productForm.addToCart();
    });

    it('Verificar se o produto foi adicionado ao carrinho.', function () {
      productForm.confirmAddToCart();
    });

    it('Verificar se o produto "Blue Top" está presente no carrinho.', function () {
      const productName = addToCartData.oneBlueTop.product;
      cartForm.verifyProductInCart(productName, 1);
    });
  });

  describe('CT008 - Adicionar múltiplas unidades de um produto', function () {
    before(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('Acessar o site https://automationexercise.com/', function () {
      cy.visit('/');
    });

    it('Navegar até a página "Products".', function () {
      searchForm.navigateToProducts();
    });

    it('Selecionar o produto "Blue Top" e navegar para a página de detalhes.', function () {
      const productName = addToCartData.twoBlueTop.product;
      cy.contains('.productinfo.text-center p', productName)
        .should('be.visible')
        .closest('.col-sm-4')
        .within(() => {
          cy.contains('.choose a', 'View Product').should('be.visible').click();
        });
    });

    it('Especificar a quantidade como 2.', function () {
      const quantity = addToCartData.twoBlueTop.quantity;
      productForm.specifyQuantity(quantity);
    });

    it('Adicionar o produto ao carrinho.', function () {
      productForm.addToCart();
    });

    it('Verificar se o produto foi adicionado ao carrinho.', function () {
      productForm.confirmAddToCart();
    });

    it('Verificar se duas unidades do produto "Blue Top" estão presentes no carrinho.', function () {
      const productName = addToCartData.twoBlueTop.product;
      const quantity = addToCartData.twoBlueTop.quantity;
      cartForm.verifyProductInCart(productName, quantity);
    });

  });
});
