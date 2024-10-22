describe("Insert multiple items in the shopping cart", () => {
  const storeItems = [
    "sauce-labs-backpack",
    "sauce-labs-bike-light",
    "sauce-labs-bolt-t-shirt",
    "sauce-labs-fleece-jacket",
    "sauce-labs-onesie",
    "test.allthethings()-t-shirt-(red)",
  ];

  beforeEach("Visit the login page", () => {
    cy.visit("/");
    cy.login("standard_user", "secret_sauce");
  });

  const addItemsToCart = (itemName, cartCount) => {
    cy.get(`[data-test="add-to-cart-${itemName}"]`).click();
    cy.get(`[data-test="remove-${itemName}"]`).should("have.text", "Remove");
    cy.get('[data-test="shopping-cart-badge"]').should(
      "have.text",
      cartCount.toString()
    );
  };

  it("User Should login and add all items to cart", () => {
    storeItems.forEach((item, index) => {
      addItemsToCart(item, index + 1);
    });
  });
});
