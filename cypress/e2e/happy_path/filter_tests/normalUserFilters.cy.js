import { products } from "../../../fixtures/products";

describe("User should use filters to match desired items", () => {
  const storeItems = Object.values(products);
  beforeEach(() => {
    cy.visit("/");
    cy.login("standard_user", "secret_sauce");
  });

  it("User Should use default filter", () => {
    cy.get('[data-test="product-sort-container"]').select("az");
    const sortedItems = storeItems.map((product) => product.displayName).sort();
    const pageItems = (itemName) => {
      cy.get(`[data-test="add-to-cart-${itemName}"]`).each((item, index) => {
        cy.wrap(item).should("have.text", sortedItems[index]);
      });
    };
  });
  it("User Should use Z-A filter"),
    () => {
      cy.get('[data-test="product-sort-container"]').should(
        "have.text",
        "Name (Z to A)"
      );
    };
  it("User should use low to high filter"),
    () => {
      cy.get('[data-test="product-sort-container"]').should(
        "have.text",
        "Price (low to high))"
      );
    };
  it("User should use high to low filter"),
    () => {
      cy.get('[data-test="product-sort-container"]').should(
        "have.text",
        "Price (high to low))"
      );
    };
});
