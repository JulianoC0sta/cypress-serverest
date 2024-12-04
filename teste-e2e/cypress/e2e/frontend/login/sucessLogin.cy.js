describe("Login ServeRest", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve realizar o login com credenciais válidas", () => {
    cy.preencherDadosLoginValido();
    cy.validaUsuarioLogado();
  });
});
