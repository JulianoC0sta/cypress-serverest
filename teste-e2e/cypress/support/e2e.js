/// <reference types="cypress" />

Cypress.Commands.add("preencherDadosLoginValido", () => {
  const email = Cypress.env("userEmail");
  const senha = Cypress.env("userPassword");

  // Preenche os campos de login com credenciais das variáveis de ambiente
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="senha"]').type(senha, { log: false });

  cy.get('[data-testid="entrar"]').click();
});

/*--------------------------------------------------------------//--------------------------------------------------------------------*/

Cypress.Commands.add("validaUsuarioLogado", () => {
  cy.url().should("include", "/home");

  cy.get('[data-testid="botaoPesquisar"]').should("be.visible");
  cy.get('[data-testid="logout"]').should("be.visible");
});

/*--------------------------------------------------------------//--------------------------------------------------------------------*/

Cypress.Commands.add("prrencherDadosLoginInvalido", () => {
  cy.get('[data-testid="email"]').type("usuario@invalido.com");
  cy.get('[data-testid="senha"]').type("passwordError2024");
  cy.get('[data-testid="entrar"]').click();

  cy.url().should("include", "/login");
});

/*--------------------------------------------------------------//--------------------------------------------------------------------*/

Cypress.Commands.add("validaMensagemLoginInvalido", () => {
  cy.get(".alert")
    .should("be.visible")
    .and("include.text", "Email e/ou senha inválidos");
  // Valida se o texto da mensagem é vermelho
  cy.get(".alert").should("have.css", "color", "rgb(255, 255, 255)");
});

/*--------------------------------------------------------------//--------------------------------------------------------------------*/

Cypress.Commands.add("realizaCadastroPerfilAdm", () => {
  cy.get('[data-testid="cadastrar"]').click();

  cy.url().should("include", "/cadastrarusuarios");

  // Preenche o formulário de cadastro
  cy.get('[data-testid="nome"]').type("Usuário Teste");
  cy.get('[data-testid="email"]').type(`usuario${Date.now()}@qa.com`);
  cy.get('[data-testid="password"]').type("SenhaErradaBlablacar");
  cy.get('[data-testid="checkbox"]').check();

  // Aguarda a requisição da api finalizar e enviar o formulario
  cy.intercept("POST", "/usuarios").as("createUser");
  cy.get('[data-testid="cadastrar"]').click();

  cy.wait("@createUser");

  // Valida a mensagem de sucesso de cadastro
  cy.get(".alert", { timeout: 10000 }).should(
    "contain.text",
    "Cadastro realizado com sucesso"
  );
});

/*--------------------------------------------------------------//--------------------------------------------------------------------*/

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
