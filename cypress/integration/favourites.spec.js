describe("Selecting favourites", () => {
    it("should display an avatar for tagged movies and list them on the Favourites page", () => {
      cy.get(".MuiAvatar-circle").should(
        "have.length",
        0
      );   
      cy.get("button[aria-label='add to favorites']").eq(0).click();
      cy.get("button[aria-label='add to favorites']").eq(2).click();
      cy.get(".MuiAvatar-circle").should(
        "have.length",
        2
      );  
      // Are correct cards tagged?
      cy.get(".MuiCardHeader-root").eq(0).find(".MuiAvatar-circle")    
      cy.get(".MuiCardHeader-root").eq(2).find(".MuiAvatar-circle")    
      // Check the Favourites page.
      cy.get("header").find(".MuiToolbar-root").find("button").eq(1).click();
      cy.get(".MuiCardHeader-content").should(
        "have.length",
        2
      );
      cy.get(".MuiCardHeader-content").eq(0).find("p").contains(movies[0].title)
      cy.get(".MuiCardHeader-content").eq(1).find("p").contains(movies[2].title)
    });
  });