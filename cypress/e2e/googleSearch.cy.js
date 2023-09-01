/// <reference types="Cypress" />;

describe("Should Perform a google Search", () => {
  it("Searches for Hello World on google.com", () => {
    cy.visit("https://google.com");
    //Getting the Search bar and Inputting the search criteria
    cy.get("#APjFqb").click().type("Hello World{enter}");
    //Asserting the search URL
    cy.url().should("include", "/search?q=Hello+World");
    //Inputting that the search term is contained within the new page.
    cy.get("#search a")
      .invoke("attr", "href")
      .then((href) => {
        expect(href).to.contain("Hello-World");
      });
    cy.contains("Hello world").should("exist");
  });
});
