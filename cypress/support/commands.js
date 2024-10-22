Cypress.Commands.add("login", (user, password) => {
  cy.get("[data-test=username]").type(user);
  cy.get("[data-test=password]").type(password);
  cy.get("[data-test=login-button]").click();
});

Cypress.Commands.add("addAllItemsToCart", (items) => {
  items.forEach((item) => {
    cy.get(`[data-test="add-to-cart-${item}"]`).click();
    cy.get(`[data-test="remove-${item}"]`).should("have.text", "Remove");
  });
  cy.get('[data-test="shopping-cart-badge"]').should(
    "have.text",
    items.length.toString()
  );
});
