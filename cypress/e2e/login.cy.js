describe("login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("success login with custom command", () => {
    cy.login("yo_hanna_ms@yahoo.com", "123456");
    cy.url().should("eq", "https://demowebshop.tricentis.com/");
  });

  it.only("success login", () => {
    cy.get('[href="/login"]').click();
    cy.get("#Email").type("yo_hanna_ms@yahoo.com");
    cy.get("#Password").type("123456");
    cy.get(".login-button").click();
    cy.get("[href='/customer/info']").should(
      "contain.text",
      "yo_hanna_ms@yahoo.com"
    );
  });
});
