import { userDetails } from "../../fixtures/login_users.json";

describe("Should login with multiple user options", () => {
  beforeEach("Visit the login page", () => {
    cy.visit("/");
  });

  it("Should login with with multiple forms", () => {
    userDetails.forEach((items) => {
      cy.get("[data-test=username]").type(items.user);
      cy.get("[data-test=password]").type(items.password);
      cy.get("[data-test=login-button]").click();
      cy.get(".title").should("have.text", "Products");
      cy.get("#react-burger-menu-btn").click();
      cy.get("[data-test=logout-sidebar-link").click();
    });

    cy.get("[data-test=username]").type("locked_out_user"); //Insert another it here!!!! fix the problem first!
    cy.get("[data-test=password]").type("secret_sauce"); // Store this guys later in a variable in the support page!
    cy.get("[data-test=login-button]").click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
