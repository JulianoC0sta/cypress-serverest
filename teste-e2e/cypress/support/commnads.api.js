/// <reference types="cypress" />
Cypress.Commands.add("login", (email, password) => {
  cy.request({
    method: "POST",
    url: "https://serverest.dev/login",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: {
      email: email,
      password: password,
    },
  }).then(response => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property("authorization");
    const token = response.body.authorization;
    cy.wrap(token).as("token");
  });
});

Cypress.Commands.add("createUser", user => {
  cy.request({
    method: "POST",
    url: Cypress.env("usersEndpoint"),
    body: user,
  }).then(response => {
    expect(response.status).to.eq(201);
    expect(response.body.message).to.eq("Cadastro realizado com sucesso");
    return response.body._id;
  });

  Cypress.Commands.add("deleteUser", userId => {
    cy.request({
      method: "DELETE",
      url: `${Cypress.env("usersEndpoint")}/${userId}`,
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Registro excluído com sucesso");
    });
  });
});
