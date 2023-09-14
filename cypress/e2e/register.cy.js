describe("register", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.only("success register", () => {
    cy.get('[href="/register"]').click();
    cy.get("#gender-female").check();
    cy.get("#FirstName").type("Yohanna");
    cy.get("#LastName").type("Santoso");
    cy.get("#Email").type("yo_hanna_ms4@yahoo.com");
    cy.get("#Password").type("123456");
    cy.get("#ConfirmPassword").type("123456");
    cy.get("#register-button").click();
    cy.get(".result").should("contain.text", "Your registration completed");
    cy.get(".register-continue-button").should("exist").click();
    cy.get("[href='/customer/info']").should(
      "contain.text",
      "yo_hanna_ms4@yahoo.com"
    );
  });
});
