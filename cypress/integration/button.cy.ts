describe("button", () => {
  it("click", () => {
    // 必要であればlocal server(vite: http://127.0.0.1:5173/)を使う時とserveによるserver(serve: http://localhost:8080)を使うときで分岐できそう
    cy.visit("http://localhost:8080");
    for (let i = 0; i < 5; i++) {
      cy.get('[aria-label="counter-button"]').click();
    }

    cy.get('[aria-label="counter-button"]').should(
      "include.text",
      "count is 5"
    );
  });
});
