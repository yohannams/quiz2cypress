describe("register", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("success register", () => {
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

  it("success register", () => {
    cy.get('[href="/register"]').click();
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

  it("failed register", () => {
    cy.get('[href="/register"]').click();
    cy.get("#gender-female").check();
    cy.get("#FirstName").type("Yohanna");
    cy.get("#Email").type("yo_hanna_ms4@yahoo.com");
    cy.get("#Password").type("123456");
    cy.get("#ConfirmPassword").type("123456");
    cy.get("#register-button").click();
    cy.get("span[for='LastName']").should(
      "contain.text",
      "Last name is required."
    );
  });

  it("failed register", () => {
    cy.get('[href="/register"]').click();
    cy.get("#gender-female").check();
    cy.get("#FirstName").type("Yohanna");
    cy.get("#LastName").type("Santoso");
    cy.get("#Email").type("yo_hanna_ms4@yahoo.com");
    cy.get("#Password").type("123456");
    cy.get("#ConfirmPassword").type("1234567");
    cy.get("#register-button").click();
    cy.get("span[for='ConfirmPassword']").should(
      "contain.text",
      "The password and confirmation password do not match."
    );
  });

  it("failed register", () => {
    cy.get('[href="/register"]').click();
    cy.get("#gender-female").check();
    cy.get("#FirstName").type("Yohanna");
    cy.get("#LastName").type("Santoso");
    cy.get("#Email").type("yo_hanna_ms4@yahoo.com");
    cy.get("#Password").type("123");
    cy.get("#ConfirmPassword").type("1234567");
    cy.get("#register-button").click();
    cy.get("span[for='Password']").should(
      "contain.text",
      "The password should have at least 6 characters."
    );
    cy.get("span[for='ConfirmPassword']").should(
      "contain.text",
      "The password and confirmation password do not match."
    );
  });
});
