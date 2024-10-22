import { userDetails } from "../../../fixtures/login_users.json";
import { MainNav } from "../../../support/pages/mainNav";

describe("Should login with multiple user options", () => {
  beforeEach("Visit the login page", () => {
    cy.visit("/");
  });

  it("Should login with with multiple forms", async () => {
    userDetails.forEach((items) => {
      cy.get("[data-test=username]").type(items.user);
      cy.get("[data-test=password]").type(items.password);
      cy.get("[data-test=login-button]").click();
      cy.get("[data-test=title]").should("have.text", "Products");
      MainNav.burguerButton().click();
      cy.get("[data-test=logout-sidebar-link").click();
    });
  });
});
