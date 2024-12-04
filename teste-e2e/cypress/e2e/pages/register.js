class RegisterPage {
  visit() {
    cy.get('[data-testid="cadastrar"]').click();
  }

  fillForm(nome, email, password) {
    cy.get('[data-testid="nome"]').type(nome);
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="password"]').type(password);
    cy.get('[data-testid="checkbox"]').check(); // Se necessário
  }

  submit() {
    cy.get('[data-testid="cadastrar"]').click();
  }

  assertRegisterSuccess() {
    cy.get(".alert").should("contain.text", "Cadastro realizado com sucesso");
    cy.url().should("include", "/admin/home");
  }
}

export const registerPage = new RegisterPage();
