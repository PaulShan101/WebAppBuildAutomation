# WebAppBuildAutomation


Assignment 1 - ReactJS app.
Name: Paul Shanahan

Overview.
this content is my updates to my movie app. I added three pages and worked on the navigation of the app.
my repository is of commits of my approach to it. i worked on the develop branch and will merge that the main 
branch when it is complete

Features.


New Page Trending: added a page for the movies that are trending at the moment
New Page People: added a page for the actors and actresses and their star liking and their role.
New Pages Upcomimg and Popular: these 2 pages consist of movies that are coming new and movies that are the most popular at the moment 
Setup requirements.
[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

API endpoints.
[ List the additional TMDB endpoints used, giving the description and pathname for each one.]

e.g.
Upcoming list of movies - movies/upcoming
People list  - movies/people
Movie details - movie/:id
Movie genres = /genre/movie/list
Movie reviews = /reviews/form
App Design.

[ Insert a screenshot from the Storybook UI that lists all the stories for the app's components, and highlight those relating to your new/modified components - see the example screenshot below.] .......



UI Design.
[ Insert screenshots of the new/modified app pages you developed (and modified existing pages), Include an appropriate caption for each one (see example below).

 

Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

 

Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

Routing.
[ List the new routes supported by your app and state the associated page.]

/blogs - displays all published blogs.
/blogs/:id - displays a particular blog.
/blogs/:id/comments - detail view of a particular blog and its comments.
etc.



[ Itemize the technologies/techniques you researched independently and adopted in your project, i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these (we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).

Assignment 1 - Agile Software Practice.
Automated Testing.
Best test cases.
[ List the top 4/5 test cases ('it' blocks), in your opinion, from your test suite that best demonstrate your competency in writing Cypress test code. Specify the test file name and the starting line number of the 'it' block,

e.g.
  it("should display the movie's details", () => {
            cy.get("h3").contains("Overview");
            cy.get("h3").next().contains(movie.overview);
            cy.get("ul")
              .eq(1)
  the test show show the movie details 
  
             
              beforeEach(() => {
    cy.visit(`/movies/${movie.id}`);
  });
  describe("Base tests", () => {
    it("should display movie title in the page header", () => {
      cy.get("h3").contains(movie.title);
      
 The test should show the movie title     
 
  describe("By movie genre By Horror", () => {
    it("should display movies with the specified genre only", () => {
       const selectedGenreId = 35;
       const selectedGenreText = "Horror";
       const matchingMovies = filterByGenre(movies, selectedGenreId);
       cy.get("#genre-select").click();
       cy.get("li").contains(selectedGenreText).click();
       cy.get(".MuiCardHeader-content").should(
         "have.length", 2
         //matchingMovies.length
       );

.
[Specify the test file(s) that contain custom Cypress command implementations.]

e.g.

cypress/integration/popular-page.spec.js
cypress/integration/people-page.spec.js
cypress/integration/trending-page.spec.js
cypress/integration/home-page.spec.js
cypress/integration/popular-page.spec.js
cypress/integration/navigation.spec.js
Code Splitting.
[Show a screenshot of the 'build/static/js' folder of your project]


