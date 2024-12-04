describe("Delete User API", () => {
  it("Deve criar e deletar um usuário com sucesso", () => {
    const user = {
      nome: "Usuário API",
      email: `usuario${Date.now()}@mailinator.com`,
      password: "senha123",
      administrador: "true",
    };

    cy.createUser(user).then(userId => {
      cy.wrap(userId).as("userId");
    });

    cy.get("@userId").then(userId => {
      cy.deleteUser(userId);
    });
  });
});
