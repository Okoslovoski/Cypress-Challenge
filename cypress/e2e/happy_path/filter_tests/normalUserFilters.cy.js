import { products } from "../../../fixtures/products";

describe("User should use filters to match desired items", () => {
  const filters = [
    { option: "az", text: "Name (A to Z)" },
    { option: "za", text: "Name (Z to A)" },
    { option: "lohi", text: "Price (low to high)" },
    { option: "hilo", text: "Price (high to low)" },
  ];

  beforeEach(() => {
    cy.visit("/");
    cy.login("standard_user", "secret_sauce");
  });

  filters.forEach((filter) => {
    it(`User should apply the filter: ${filter.text}`, () => {
      cy.get('[data-test="product-sort-container"]').select(filter.option);

      cy.get('[data-test="product-sort-container"] option:selected').should(
        "have.text",
        filter.text
      );

      cy.get('[data-test="inventory-item-name"]').then(($items) => {
        const displayedNames = [...$items].map((item) => item.innerText);

        let sortedNames;
        if (filter.option === "az") {
          sortedNames = products.map((p) => p.displayName).sort();
        } else if (filter.option === "za") {
          sortedNames = products
            .map((p) => p.displayName)
            .sort()
            .reverse();
        } else if (filter.option === "lohi") {
          sortedNames = products
            .sort((a, b) => a.price - b.price)
            .map((p) => p.displayName);
        } else if (filter.option === "hilo") {
          sortedNames = products
            .sort((a, b) => b.price - a.price)
            .map((p) => p.displayName);
        }

        expect(displayedNames).to.deep.equal(sortedNames);
      });
    });
  });
});
