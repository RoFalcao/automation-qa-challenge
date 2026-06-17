import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário acessa a página de login", () => {
    cy.visit("https://www.automationexercise.com/login");
});

Given("realiza login com credenciais válidas", () => {
    cy.get('[data-qa="login-email"]').type("automation-qa-challenge@teste.com.br");
    cy.get('[data-qa="login-password"]').type("teste");
    cy.get('[data-qa="login-button"]').click();

    cy.contains("Logged in as").should("be.visible");
});

When("pesquisa pelo produto {string}", (produto) => {
    cy.visit("https://www.automationexercise.com/products");

    cy.get("#search_product").type(produto);
    cy.get("#submit_search").click();

    cy.contains(produto).should("be.visible");
});

When("adiciona o produto ao carrinho", () => {
    cy.contains("Add to cart").first().click();
    cy.contains("View Cart").click();
});

When("acessa o carrinho de compras", () => {
    cy.url().should("include", "view_cart");
});

When("prossegue para o checkout", () => {
    cy.contains("Proceed To Checkout").click();
});

Then("o produto {string} deve estar listado na tela de pagamento", (produto) => {
    cy.url().should("include", "checkout");
    cy.scrollTo("bottom");
    cy.contains(produto)
        .scrollIntoView()
        .should("be.visible");
});