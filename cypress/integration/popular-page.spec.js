let movies;    // List of movies from TMDB

// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

describe("Popular ", () => {
    before(() => {
      // Get movies from TMDB and store in movies variable.
      cy.request(
        `https://api.themoviedb.org/3/movie/popular?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&page=3`
      )
        .its("body")    // Take the body of HTTP response from TMDB
        .then((response) => {
          movies = response.results
        })
    })
    beforeEach(() => {
      cy.visit("/movies/popular")
    });


describe("Filtering", () => {
    describe("By movie title", () => {
     it("should only display movies with a in the title", () => {
       let searchString = "a";
       let matchingMovies = filterByTitle(movies, searchString);
       cy.get("#filled-search").clear().type(searchString); // Enter e in text box
       cy.get(".MuiCardHeader-content").should("have.length", matchingMovies.length);
      
       });
     })
    })
  })
