let actor = 11969;
let movie;

beforeEach(() => {
      cy.visit("/movies/people")
    });

    describe("check people", function()  {
      it("visits people page", function() {
        cy.contains("People")
       })
      })

      describe("check Piper perabo", function()  {
        it("visits Piper Perabo", function() {
          cy.contains("Piper Perabo")
         })
        })

        describe("check Acting", function()  {
          it("checks for Acting", function() {
            cy.contains("Acting")
           })
          })

          describe("check Homepage", function()  {
            it("Navigate to Homepage", function() {
              cy.contains("Home").click()
             })
            })
   

// describe("PeoplePage", () => {
//   before(() => {
//     cy.request(
//         `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`
//         )
//           .then(res => res.json())
//           .then(json => json.results);
//         })
//     })
//   beforeEach(() => {
//     cy.visit("/movies/people")
//   });
  
//   describe("Base tests", () => {
//     it("should display actor title in the page header", () => {
//       cy.get("div").contains(actor.name);
//     });
//   });

//   describe("Base tests", () => {
//       it("should display movie pictures", () => {
//         cy.get("div").contains("https://image.tmdb.org/t/p/w500"+actor.profile_path)
//       });
//     });

   