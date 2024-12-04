describe("Login API", () => {
  it("Deve realizar login com sucesso e retornar um token", () => {
    cy.login(Cypress.env("validEmail"), Cypress.env("validPassword")).then(
      () => {
        cy.get("@token").should("match", /^Bearer .+/);
      }
    );
  });
});
