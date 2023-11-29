## Sortable Movies JavaScript Project
### Sorting movies array of objects by key
#### Fair Use of movie posters for educational purposes / classroom use only.
This project dynamically generates a web page of movie data, consisting of a grid of divs, each containing a movie poster image, followed by info about the film.

The movies load in alphabetical order, with leading articles ("A", "The") ignorned, so "A Beautiful Mind" is alphabetized as "B" and "The Deer Hunter" with "D".

Choosing from the select menu calls a function that sorts the movies array by the selected key:
- **year** sorts movies by year in ascending order.
- **duration** sorts movies by run time from shortest to longest;
- **name** sorts movies alphabetically, by name from A-Z (ignorning leading articles)
- **oscars** sorts movies by number of Academy Awards won in descending order
- **tomatometer** sorts movies by Rotten Tomatoes score in descending order
- Check/uncheck the **Descending** checkbox to reverse sort order.

- The functions:
- **sortMovies()** does the sort by object key, which is the select menu value; function ends with a call the renderMovies()
- **renderMovies()** iterates the **movies.js** array of movie objects, using the data to make DOM elements, dynamically.
- the checkbox has an inline function that reversese movies.js array order and calls renderMovies.