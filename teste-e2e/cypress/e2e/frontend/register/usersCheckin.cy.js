describe("Cadastro de usuário no ServeRest", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve permitir o cadastro de um novo usuário com dados válidos", () => {
    cy.realizaCadastroPerfilAdm();
    cy.url().should("include", "/admin/home");
  });
});
