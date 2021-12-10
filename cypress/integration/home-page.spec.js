let movies;    // List of movies from TMDB

// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

describe("Home Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        movies = response.results
      })
  })
  beforeEach(() => {
    cy.visit("/")
  });

  describe("Base tests", () => {
    
  });

  describe("Selecting favourites", () => {
    it("should display an avatar for tagged movies and list them on the Favourites page", () => {
      cy.get(".MuiAvatar-circle").should(
        "have.length",
        0
      );   
      cy.get("button[aria-label='add to favorites']").eq(0).click();
      cy.get("button[aria-label='add to favorites']").eq(2).click();
      
      cy.visit("/movies/favorites") 
        // Are correct cards tagged?
        // cy.get(".MuiCardHeader-root").eq(0).find(".MuiAvatar-circle")    
        // cy.get(".MuiCardHeader-root").eq(2).find(".MuiAvatar-circle")    
        // // Check the Favourites page.
        // cy.get("header").find(".MuiToolbar-root").find("button").eq(1).click();
        // cy.get(".MuiCardHeader-content").should(
        //   "have.length",
        //   2
        
        // cy.get(".MuiCardHeader-content").eq(0).find("p").contains(movies[0].title)
        // cy.get(".MuiCardHeader-content").eq(1).find("p").contains(movies[2].title)
      });
    });
   


  describe("check the movie Red Notice", function()  {
    it("Checks Red Notice", function() {
      cy.get("#filled-search").type("Red Notice")
     })
    })
  


  describe("Filtering", () => {
    describe("By movie title", () => {
     it("should only display movies with e in the title", () => {
       let searchString = "e";
       let matchingMovies = filterByTitle(movies, searchString);
       cy.get("#filled-search").clear().type(searchString); // Enter e in text box
       cy.get(".MuiCardHeader-content").should("have.length", matchingMovies.length);
      
       });
     })
    })


  describe("Filtering", () => {
    describe("By movie title", () => {
     it("should only display movies with m in the title", () => {
       let searchString = "m";
       let matchingMovies = filterByTitle(movies, searchString);
       cy.get("#filled-search").clear().type(searchString); // Enter m in text box
       cy.get(".MuiCardHeader-content").should(
         "have.length",
         matchingMovies.length
       );
       cy.get(".MuiCardHeader-content").each(($card, index) => {
         cy.wrap($card).find("p").contains(matchingMovies[index].title);
       });
     })
     it("should only display movies with o in the title", () => {
       let searchString = "o";
       let matchingMovies = filterByTitle(movies, searchString);
       cy.get("#filled-search").clear().type(searchString); // Enter m in text box
       cy.get(".MuiCardHeader-content").should(
         "have.length",
         matchingMovies.length
       );
       cy.get(".MuiCardHeader-content").each(($card, index) => {
         cy.wrap($card).find("p").contains(matchingMovies[index].title);
       });
     });
     it("should only display movies with y in the title", () => {
      let searchString = "y";
      let matchingMovies = filterByTitle(movies, searchString);
      cy.get("#filled-search").clear().type(searchString); // Enter m in text box
      cy.get(".MuiCardHeader-content").should(
        "have.length",
        matchingMovies.length
      );
      cy.get(".MuiCardHeader-content").each(($card, index) => {
        cy.wrap($card).find("p").contains(matchingMovies[index].title);
      });
    });
   })

   it("should display no movies when the search string is yz", () => {
    // Do a second test for certainty!
    let searchString = "yz";
    let matchingMovies = filterByTitle(movies, searchString);
    cy.get("#filled-search").clear().type(searchString); // Enter m in text box
    cy.get(".MuiCardHeader-content").should("have.length", 0);
  });

  // describe("check for Red Notice", function()  {
  //   it("Navigate to review page", function() {
  //     cy.contains("/movies/512195").click()
  //    })
  //   })



  //  describe("By movie genre By Thriller", () => {
  //   it("should display movies with the specified genre only", () => {
  //      const selectedGenreId = 35;
  //      const selectedGenreText = "Thriller";
  //      const matchingMovies = filterByGenre(movies, selectedGenreId);
  //      cy.get("#genre-select").click();
  //      cy.get("li").contains(selectedGenreText).click();
  //      cy.get(".MuiCardHeader-content").should("have.length", 4
  //      )
       
  //     });
  //     });
  //    })

  //  describe("By movie genre By Fantasy", () => {
  //   it("should display movies with the specified genre only", () => {
  //      //const selectedGenreId = 20;
  //      const selectedGenreText = "Fantasy";
  //      //const matchingMovies = filterByGenre(movies, selectedGenreId);
  //      cy.get("#genre-select").click();
  //      cy.get("li").contains(selectedGenreText).click();
  //      cy.get(".MuiCardHeader-content").should(
  //        "have.length",
  //        5
  //      )
       
  //     });
  //     });
  //    })
   describe("By movie genre By Comedy", () => {
    it("should display movies with the specified genre only", () => {
       const selectedGenreId = 35;
       const selectedGenreText = "Comedy";
       const matchingMovies = filterByGenre(movies, selectedGenreId);
       cy.get("#genre-select").click();
       cy.get("li").contains(selectedGenreText).click();
       cy.get(".MuiCardHeader-content").should(
         "have.length",
         matchingMovies.length
       );
       cy.get(".MuiCardHeader-content").each(($card, index) => {
         cy.wrap($card).find("p").contains(matchingMovies[index].title);
       });
     });
   });
  });
});
 
