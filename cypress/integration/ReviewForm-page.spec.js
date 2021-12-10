let actor = 11969;
let movie;

beforeEach(() => {
      cy.visit("/movies/favorites")
    });



 describe("check forms", function()  {
    it("Navigate to Form page", function() {
      cy.contains("/review/form").click()
     })
    })