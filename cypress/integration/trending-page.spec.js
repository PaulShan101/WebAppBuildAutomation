let movies;    // List of movies from TMDB

// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

describe("Trending ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/movie/popular?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&page=4`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        movies = response.results
      })
  })
  beforeEach(() => {
    cy.visit("/movies/trending")
  });

 

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
  })

  // describe("By movie genre By Comedy", () => {
  //   it("should display movies with the specified genre only", () => {
  //      //const selectedGenreId = 35;
  //      const selectedGenreText = "Comedy";
  //     // const matchingMovies = filterByGenre(movies, selectedGenreId);
  //      cy.get("#genre-select").click();
  //      cy.get("li").contains(selectedGenreText).click();
  //      cy.get(".MuiCardHeader-content").should(
  //        "have.length", 8
  //        //matchingMovies.length
  //      );
  //      cy.get(".MuiCardHeader-content").each(($card, index) => {
  //        cy.wrap($card).find("p").contains(matchingMovies[index].title);
  //      });
  //    });
  //  });


  //  describe("By movie genre By Horror", () => {
  //   it("should display movies with the specified genre only", () => {
  //      const selectedGenreId = 35;
  //      const selectedGenreText = "Horror";
  //      const matchingMovies = filterByGenre(movies, selectedGenreId);
  //      cy.get("#genre-select").click();
  //      cy.get("li").contains(selectedGenreText).click();
  //      cy.get(".MuiCardHeader-content").should(
  //        "have.length", 2
  //        //matchingMovies.length
  //      );
       
  //    });
  //  });

    
  //  describe("By movie genre", () => {
  //   it("should display movies with the specified genre only", () => {
  //     // const selectedGenreId = 35;
  //      const selectedGenreText = "Family";
  //      const matchingMovies = filterByGenre(movies);
  //      cy.get("#genre-select").click();
  //      cy.get("li").contains(selectedGenreText).click();
  //      cy.get(".MuiCardHeader-content").should(
  //        "have.length",
  //        matchingMovies.length
  //      );
      
  //    });
  //  });
 
