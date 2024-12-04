class LoginPage {
  visit() {
    cy.visit("https://front.serverest.dev/login");
  }

  fillEmail(email) {
    cy.get('[data-testid="email"]').type(email);
  }

  fillPassword(password) {
    cy.get('[data-testid="password"]').type(password);
  }

  submit() {
    cy.get('[data-testid="login"]').click();
  }

  assertLoginSuccess() {
    cy.url().should("include", "/admin/home");
    cy.get(".alert").should("contain.text", "Login realizado com sucesso");
  }
}

export const loginPage = new LoginPage();
