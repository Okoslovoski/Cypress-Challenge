export let shoppingCart = {
  buyCartButton: () => cy.get('[data-test="shopping-cart-link"]'),
  cartBadge: () => cy.get("[shopping-cart-badge]"),
};
