// cypress/e2e/product_search.cy.js

import SearchPage from '../support/page_objects/SearchPage';

const searchPage = new SearchPage();

describe('RT003 - Pesquisa de Produto', function () {
  let searchData;

  before(function () {
    cy.fixture('searchData').then((data) => {
      searchData = data;
    });
  });

  describe('CT005 - Pesquisa com termo existente', function () {
    it('Acessar o site https://automationexercise.com/', function () {
      cy.visit('/');
    });

    it('Localizar a barra de pesquisa no topo da página.', function () {
      searchPage.navigateToProducts();
      searchPage.searchBar.should('be.visible');
    });

    it('Digitar o nome de um produto existente (por exemplo, "Dress").', function () {
      const searchTerm = searchData.searchTerms.existing;
      searchPage.typeSearchTerm(searchTerm);
    });

    it('Clicar no botão de pesquisa (ícone de lupa).', function () {
      searchPage.clickSearchButton();
    });    

    it('Verificar se foram apresentados produtos resultantes da pesquisa.', function () {
      searchPage.verifyResultsFound();
    });

  });

  describe('CT006 - Pesquisa com termo inexistente', function () {
    it('Acessar o site https://automationexercise.com/', function () {
      cy.visit('/');
    });

    it('Clicar no link "Products" no header para acessar a página de produtos.', function () {
      searchPage.navigateToProducts();
    });

    it('Localizar a barra de pesquisa no topo da página.', function () {
      searchPage.searchBar.should('be.visible');
    });

    it('Digitar o termo de pesquisa inexistente ("XYZ123").', function () {
      const searchTerm = searchData.searchTerms.nonExisting;
      searchPage.typeSearchTerm(searchTerm);
    });

    it('Clicar no botão de pesquisa (ícone de lupa).', function () {
      searchPage.clickSearchButton();
    });      

    it('Verificar se NÃO foram apresentados produtos resultantes da pesquisa.', function () {
      searchPage.verifyNoResultsFound();
    });
  });
});
