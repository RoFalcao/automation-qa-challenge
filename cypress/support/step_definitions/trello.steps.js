import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";

let response;

Given("que possuo acesso à API do Trello", () => {
    // Pré-condição do cenário
});

When("consulto uma ação válida pelo endpoint informado", () => {
    cy.request({
        method: "GET",
        url: "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a"
    }).then((res) => {
        response = res;
    });
});

Then("o serviço deve retornar status code 200", () => {
    expect(response.status).to.eq(200);
});

Then("o campo {string} deve ser retornado na resposta", () => {
    expect(response.body.data).to.have.property("list");
    expect(response.body.data.list).to.have.property("name");
    expect(response.body.data.list.name).to.exist;
});

Then("o nome da lista deve ser exibido", () => {
    const listName = response.body.data.list.name;

    cy.log(`Nome da lista: ${listName}`);

    expect(listName).to.be.a("string");
    expect(listName.trim()).to.not.equal("");
});