describe("Failed login test", () => {
  beforeEach("Visit the login page", () => {
    cy.visit("/");
  });
  it("Should try locked user login option", async () => {
    cy.get("[data-test=username]").type("locked_out_user");
    cy.get("[data-test=password]").type("secret_sauce"); // Store this guys later in a variable in the support page!
    cy.get("[data-test=login-button]").click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });

  it("Should try to login with invalid option", async () => {
    cy.get("[data-tes=username]").type("bolinha mágica");
    cy.get("[data-test=password]").type("secret_sauce");
  });
});
