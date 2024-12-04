describe("Login com falha", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve exibir mensagem de erro para credenciais inválidas", () => {
    cy.prrencherDadosLoginInvalido();
    cy.validaMensagemLoginInvalido();
  });
});
