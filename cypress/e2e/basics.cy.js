/// <reference types="Cypress" />;

describe("Should render the main image", () => {
  it("passes", () => {
    cy.visit("https://google.com");
    cy.get("#APjFqb").click().type("Hello World{enter}");
    cy.get(".MjjYud");
  });
});
