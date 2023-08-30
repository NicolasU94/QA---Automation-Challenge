/// <reference types="Cypress" />;

describe("Should render the main image", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.get(".main-header img");
  });
});
