describe("User tries to add specific items to cart with specific login option", () => {
  beforeEach("Visit the login page", () => {
    cy.visit("/");
    cy.login("error_user", "secret_sauce");
  });

  it("User tries to add black t-shirt to cart ", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
      .should("have.text", "Add to cart")
      .click();
  });
  it("User tries to add fleece jacket to cart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
      .should("have.text", "Add to cart")
      .click();
  });
  it("User tries to add red t-shirt to cart", () => {
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
      .should("have.text", "Add to cart")
      .click();
  });
});
