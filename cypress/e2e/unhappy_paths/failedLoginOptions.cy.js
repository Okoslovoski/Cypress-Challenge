describe("Failed login test", () => {
  beforeEach("Visit the login page", () => {
    cy.visit("/");
  });
  it("Should try locked user login option", () => {
    cy.get("[data-test=username]").type("locked_out_user");
    cy.get("[data-test=password]").type("secret_sauce");
    cy.get("[data-test=login-button]").click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });

  it("Should try to login with invalid option", () => {
    cy.get("[data-test=username]").type("bolinha mágica");
    cy.get("[data-test=password]").type("secret_sauce");
    cy.get("[data-test=login-button]").click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );

    it("Should try to login with no credentials", () => {
      cy.get("[data-test=login-button]").click();
      cy.get('[data-test="error"]').should(
        "have.text",
        "Epic sadface: Username is required"
      );
    });
  });
});
