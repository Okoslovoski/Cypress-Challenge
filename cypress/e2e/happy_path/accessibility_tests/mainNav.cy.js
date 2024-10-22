describe("Test should check for any accessibility issues", () => {
  beforeEach("Visit the login page", () => {
    cy.visit("/");
    cy.login("standard_user", "secret_sauce");
    cy.injectAxe();
  });

  it("Test should check for main navigation accessibility errors", () => {
    cy.checkA11y();
  });
});
