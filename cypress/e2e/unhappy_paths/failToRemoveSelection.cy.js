describe("User should try to remove item selection", () => {
  beforeEach("Visit the login page", () => {
    cy.visit("/");
    cy.login("error_user", "secret_sauce");
  });

  it("User navigates to home and tries to remove selection of first product", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .should("have.text", "Add to cart")
      .click();
    cy.get('[data-test="remove-sauce-labs-backpack"]')
      .should("have.text", "Remove")
      .and("be.visible")
      .click();
  });
  it("User navigates to home and tries to remove selection of second product", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
      .should("have.text", "Add to cart")
      .click();
    cy.get('[data-test="remove-sauce-labs-bike-light"]')
      .should("have.text", "Remove")
      .and("be.visible")
      .click();
  });
  it("User navigates to home and tries to remove selection of third product", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]')
      .should("have.text", "Add to cart")
      .click();
    cy.get('[data-test="remove-sauce-labs-onesie"]')
      .should("have.text", "Remove")
      .and("be.visible")
      .click();
  });
});
