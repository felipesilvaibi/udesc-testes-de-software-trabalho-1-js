// cypress/e2e/product_search.cy.js

import SearchForm from '../support/forms/SearchForm';

const searchForm = new SearchForm();

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
      searchForm.navigateToProducts();
      searchForm.searchBar.should('be.visible');
    });

    it('Digitar o nome de um produto existente (por exemplo, "Dress").', function () {
      const searchTerm = searchData.searchTerms.existing;
      searchForm.typeSearchTerm(searchTerm);
    });

    it('Clicar no botão de pesquisa (ícone de lupa).', function () {
      searchForm.clickSearchButton();
    });    

    it('Verificar se foram apresentados produtos resultantes da pesquisa.', function () {
      searchForm.verifyResultsFound();
    });

  });

  describe('CT006 - Pesquisa com termo inexistente', function () {
    it('Acessar o site https://automationexercise.com/', function () {
      cy.visit('/');
    });

    it('Clicar no link "Products" no header para acessar a página de produtos.', function () {
      searchForm.navigateToProducts();
    });

    it('Localizar a barra de pesquisa no topo da página.', function () {
      searchForm.searchBar.should('be.visible');
    });

    it('Digitar o termo de pesquisa inexistente ("XYZ123").', function () {
      const searchTerm = searchData.searchTerms.nonExisting;
      searchForm.typeSearchTerm(searchTerm);
    });

    it('Clicar no botão de pesquisa (ícone de lupa).', function () {
      searchForm.clickSearchButton();
    });      

    it('Verificar se NÃO foram apresentados produtos resultantes da pesquisa.', function () {
      searchForm.verifyNoResultsFound();
    });
  });
});
