import { products } from "../../../fixtures/products";

describe("User should Checkout all items in the shopping cart", () => {
  const storeItems = Object.values(products);
  const addItemsToCart = () => {
    const itemNames = storeItems.map((item) => item.name);
    cy.addAllItemsToCart(itemNames);
  };

  beforeEach(() => {
    cy.session("loginAndAddItems", () => {
      cy.visit("/");
      cy.login("standard_user", "secret_sauce");
      addItemsToCart();
    });
  });

  it("User checks cart information", () => {
    cy.visit("/cart.html", { failOnStatusCode: false });

    storeItems.forEach((item, index) => {
      cy.get(`.cart_item:eq(${index})`).within(() => {
        cy.get('[data-test="inventory-item-name"]').should(
          "have.text",
          item.displayName
        );
        cy.get('[data-test="inventory-item-price"]').should(
          "have.text",
          `$${item.price}`
        );
      });
    });
    cy.get('[data-test="title"]')
      .should("have.text", "Your Cart")
      .and("be.visible");

    cy.get('[data-test="checkout"]')
      .should("be.visible")
      .and("have.text", "Checkout")
      .click();
  });

  it("User fill the checkout form", () => {
    cy.visit("/checkout-step-one.html", { failOnStatusCode: false });

    cy.get('[data-test="firstName"]').type("John");
    cy.get('[data-test="lastName"]').type("Tester");
    cy.get('[data-test="postalCode"]').type("88030000");
    cy.get('[data-test="continue"]').click();
  });

  it("User Checks payment data and final price", () => {
    cy.visit("/checkout-step-two.html", { failOnStatusCode: false });

    const totalPrice = storeItems.reduce(
      (total, cartItem) => total + cartItem.price,
      0
    );
    cy.get('[data-test="title').should("have.text", "Checkout: Overview");

    cy.get('[data-test="subtotal-label"]').should(
      "contain",
      `Item total: $${totalPrice}`
    );

    const totalPriceWithTax = (totalPrice * 1.08).toFixed(2);
    cy.get('[data-test="total-label"]').should(
      "contain",
      `Total: $${totalPriceWithTax}`
    );
  });
});
