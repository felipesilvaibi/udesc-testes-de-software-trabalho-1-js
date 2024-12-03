# UDESC Testes de Software - Trabalho 1

## Descrição

Este projeto consiste na automação de testes de sistema utilizando a ferramenta [Cypress](https://www.cypress.io/) para a plataforma [AutomationExercise](https://automationexercise.com/). O objetivo principal é verificar funcionalidades relacionadas ao processo de adicionar produtos ao carrinho de compras, assegurando que o fluxo de interação do usuário seja consistente e livre de erros.

## Índice

*   [Tecnologias Utilizadas](#tecnologias-utilizadas)

*   [Pré-requisitos](#pr%C3%A9-requisitos)

*   [Instalação](#instala%C3%A7%C3%A3o)

*   [Configuração](#configura%C3%A7%C3%A3o)

*   [Estrutura do Projeto](#estrutura-do-projeto)

*   [Scripts Disponíveis](#scripts-dispon%C3%ADveis)

*   [Executando os Testes](#executando-os-testes)

*   [Informações sobre o Cypress](#informa%C3%A7%C3%B5es-sobre-o-cypress)

*   [Considerações Finais](#considera%C3%A7%C3%B5es-finais)

*   [Contato](#contato)

## Tecnologias Utilizadas

*   **Cypress**: Ferramenta de automação de testes end-to-end para aplicações web.

*   **Node.js**: Ambiente de execução JavaScript utilizado para gerenciar dependências e scripts.

*   **JavaScript (ES6 Modules)**: Linguagem de programação utilizada para escrever os testes.

*   **Page Object Model (POM)**: Padrão de design utilizado para organizar os testes de forma modular e reutilizável.

## Pré-requisitos

Antes de iniciar, certifique-se de que você possui as seguintes ferramentas instaladas em sua máquina:

*   **Node.js**: Versão **v20.12.1** ou superior.

    *   [Download Node.js](https://nodejs.org/)

*   **NPM** (Node Package Manager): Geralmente instalado junto com o Node.js.

## Instalação

1.  **Clone o repositório**

    ```
    git clone https://github.com/seu-usuario/udesc-testes-de-software-trabalho-1.git

    ```

2.  **Acesse o diretório do projeto**

    ```
    cd udesc-testes-de-software-trabalho-1

    ```

3.  **Instale as dependências**

    ```
    npm install

    ```

## Configuração

O projeto está configurado para utilizar o Cypress com as seguintes especificações:

*   **Base URL**: `https://automationexercise.com/`

*   **Browser**: Google Chrome

*   **Segurança Web do Chrome Desativada**: `chromeWebSecurity: false`

*   **Isolamento de Testes Desativado**: `testIsolation: false`

O arquivo de configuração principal do Cypress está localizado em `cypress.config.js`:

## Estrutura do Projeto

A organização do projeto segue o padrão **Page Object Model (POM)**, facilitando a manutenção e escalabilidade dos testes.

```
udesc-testes-de-software-trabalho-1/
├── cypress/
│   ├── e2e/
│   │   └── add_to_cart.cy.js
│   ├── fixtures/
│   │   └── addToCartData.json
│   └── support/
│       ├── forms/
│       │   ├── CartForm.js
│       │   ├── ProductForm.js
│       │   └── SearchForm.js
│       └── commands.js
├── package.json
└── cypress.config.js

```

### Descrição das Pastas e Arquivos

*   **cypress/e2e/**: Contém os arquivos de teste end-to-end.

    *   `add_to_cart.cy.js`: Suite de testes para a funcionalidade de adicionar produtos ao carrinho.

*   **cypress/fixtures/**: Armazena dados estáticos utilizados nos testes.

    *   `addToCartData.json`: Dados de teste para os casos de adicionar um ou múltiplos produtos ao carrinho.

*   **cypress/support/forms/**: Contém os Page Objects.

    *   `SearchForm.js`: Métodos relacionados à navegação e pesquisa de produtos.

    *   `ProductForm.js`: Métodos para interagir com a página de detalhes do produto.

    *   `CartForm.js`: Métodos para verificar o conteúdo do carrinho.

*   **cypress.config.js**: Arquivo de configuração do Cypress.

*   **package.json**: Gerenciador de dependências e scripts do projeto.

## Scripts Disponíveis

Os scripts definidos no `package.json` facilitam a execução dos testes em diferentes modos.

```
"scripts": {
  "cypress:web": "npx cypress open --browser chrome",
  "cypress:headless": "npx cypress run --browser chrome"
}

```

### Descrição dos Scripts

*   **`npm run cypress:web`**: Abre o Cypress Test Runner em modo interativo no navegador Google Chrome.

*   **`npm run cypress:headless`**: Executa os testes de forma headless (sem interface gráfica) no Google Chrome, ideal para integração contínua.

## Executando os Testes

### 1. **Modo Interativo**

Este modo permite visualizar a execução dos testes em tempo real.

```
npm run cypress:web

```

Após executar o comando, a interface do Cypress Test Runner será aberta. Selecione o arquivo `add_to_cart.cy.js` para iniciar a execução dos testes.

### 2. **Modo Headless**

Este modo executa os testes sem abrir uma interface gráfica, retornando os resultados diretamente no terminal.

```
npm run cypress:headless

```

Os resultados da execução serão exibidos no terminal, indicando quais testes passaram ou falharam.

## Informações sobre o Cypress

O **Cypress** é uma ferramenta de automação de testes end-to-end moderna, projetada para facilitar o desenvolvimento de testes robustos e confiáveis para aplicações web. Algumas de suas características principais incluem:

*   **Tempo Real de Recarga**: Executa testes enquanto você desenvolve, proporcionando feedback imediato.

*   **Depuração Avançada**: Permite inspecionar o DOM, console e rede diretamente na interface do Test Runner.

*   **Integração Fácil**: Funciona bem com outras ferramentas e frameworks de desenvolvimento.

*   **Arquitetura Única**: Opera diretamente no navegador, garantindo uma execução rápida e eficiente dos testes.

Para mais informações, visite a documentação oficial do Cypress.

## Considerações Finais

Este projeto demonstra a aplicação prática de testes automatizados utilizando o Cypress, seguindo as melhores práticas de desenvolvimento e organização de código através do padrão Page Object Model (POM). A estrutura modularizada permite fácil manutenção e escalabilidade, facilitando a inclusão de novos casos de teste conforme a aplicação evolui.
