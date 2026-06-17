import {
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";

let response;

When("envio uma requisição GET para API do Trello", () => {
    cy.request({
        method: "GET",
        url: "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a"
    }).then((res) => {
        response = res;
    });
});

Then("o status code deve ser 200", () => {
    expect(response.status).to.eq(200);
});

Then("exibo o nome da lista", () => {

    const listName = response.body.data.list.name;

    cy.log(`Nome da lista: ${listName}`);

    expect(listName).to.eq("Professional");
});