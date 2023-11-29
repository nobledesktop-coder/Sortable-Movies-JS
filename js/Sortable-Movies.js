// Sortable Movies:

const movieHolder = document.querySelector('.movie-holder');

// 7B. Get the checkbox:
const descCB = document.getElementById('cb');
// on check/uncheck (change event) reverse order of sort and call renderMovies
descCB.addEventListener('change', function() {
    movies.reverse();
    renderMovies();
});

// 7C. Get the select menu and have it call sortMovies function:
const selectMenu = document.querySelector('select');
selectMenu.addEventListener('change', sortMovies);

// 7D. Populate the select menu w dynamically generated option tags:
// Make an array of movie obj keys, and then iterate over the array
// starting with this sample object:
/* name: "2001: A Space Odyssey", year: 1968, 
    duration: 149, genres: ["Sci-Fi" , "Adventure"], 
    director: "Stanley Kubrick", 
    oscars: {won: 1, nominated: 4}, tomatometer: 92, 
  },
expected result is this: 
['duration', 'director', 'genre','name', 'oscars', 'year', 'tomatometer']
 */
// save the movie obj keys to an array; all obj have same keys,
// so use any of the movies array's objects as the object
const movieKeys = Object.keys(movies[0]); 
console.log('array of movie object keys:', movieKeys);
for(let i = 0; i < movieKeys.length; i++) {
    let key = movieKeys[i];
    // exclude genres and director keys from the options list:
    if(key != "genres" && key != "director") {
        // make an option for that key and add it to select menu:
        const optn = document.createElement('option');
        // give the <option> its required value and text:
        optn.value = key; // leave value lowercase to match dataset
        // capitalize to look nice for user: "Duration" not "duration"
        optn.text = key[0].toUpperCase() + key.slice(1);
        if(key == 'name') optn.selected = 'selected';
        selectMenu.appendChild(optn); // add option to select menu
    }
}

// 8. loops movies array, adding 3 properties to each object:
for(let i = 0; i < movies.length; i++) {

    // 9. Inside the loop, start by simplifying the current movie object:
    const movie = movies[i];

    // hm: '2h 55m' in addition to duration: 175
    let hrs = Math.floor(movie.duration/60); // 2.916 => 2
    let mins = movie.duration % 60;
    movie.hm = `${hrs}h ${mins}m`;
    
    // fileName: "the-godfather.jpg" derived from "The Godfather"
    let movieName = movie.name;
    console.log(movie.name);
    movieName = movieName.replaceAll(" ","-"); // space => "-"
    movieName = movieName.replaceAll("'",""); // Who's => Whos
    movieName = movieName.replaceAll(":",""); // 2001: => 2001
    movieName = movieName.replaceAll(",",""); // , Part II => Part II
    movieName = movieName.replaceAll(".",""); // E.T. => ET
    movie.fileName = movieName.toLowerCase() + ".jpg";

    // noArticle: "Godfather" in addition to name: "The Godfather"
    let noArticleMovieName = movie.name.replace("The ", "");
    noArticleMovieName = noArticleMovieName.replace("A ", "");
    noArticleMovieName = noArticleMovieName.replace("An ", "");
    movie.noArticle = noArticleMovieName;
}

console.log(movies);

// 22. Define the **renderMovies()** function. First thing to do is clear the **movieHolder** of any existing content:
function renderMovies() {

    // clear the movie holder for a fresh render of a new sort order:
    movieHolder.innerHTML = "";

    // 27. Set up a loop to iterate the movies array and simplify the current movie by passing it to a variable:
    for(let i = 0; i < movies.length; i++) {
        const movie = movies[i];

        // 28. Next in the loop, make a div, give it its class and output it to movieHolder:
        const divvy = document.createElement('div');
        divvy.className = 'divvy';
        movieHolder.appendChild(divvy);

        // 29. Still in the loop, make an image object, set its source to the movie's jpg and output it to the div:
        const poster = new Image();
        poster.src = `images/${movie.fileName}`;
        divvy.appendChild(poster);

        // 30. Below the image, output the text info for the movie:
        divvy.innerHTML += movie.name + '<br>';
        divvy.innerHTML += movie.hm + ' - ' + movie.year + '<br>';
        divvy.innerHTML += `Oscars: ${movie.oscars.won} won, 
                         ${movie.oscars.nom} nominated<br>`;
        divvy.innerHTML += `Director: ${movie.director}<br>`;
        divvy.innerHTML += `Tomatometer: ${movie.tomatometer}`;

    // 31. Close the loop, close the function and Reload the page. The grid of movies should be back, although the sort feature doesn't work yet. That's next.
    
    } // end loop

} // end renderMovies()

// call the sortMovies function as soon as the page is ready for it.
// the first sort will be by the default Name (A-Z)
// the sortMovies func ends w a call to renderMovies
document.addEventListener('DOMContentLoaded', sortMovies);

// sorting movies

// 34. Define the sortMovies() function and get the menu choice, which is the sort key:
function sortMovies() {

    // 35. Get the value of the select menu, this is the sort key:
    let key = selectMenu.value;

    if(key == 'name') key = 'noArticle'; // sort names by noArticle key
    // so that the "The " movies don't all cluster at the end

    // 36. Sort according to the sort(callback) for obj key. 
    // Use [] accessor, cuz key is a variable (a.key won't work)
    movies.sort(function(a,b) {
        if(key == 'oscars') { // sort by oscars won, in descending order
            descCB.checked = 'checked'; // or: boolean value of true also works
            return a[key].won < b[key].won ? 1 : -1;
        } else if(key == 'tomatometer') { // sort by tomatometer, in descending order
            descCB.checked = true; // or: 'checked' since this is a recursive attribute,
            // meaning that the value is same as attribute name: checked="checked"
            return a[key] < b[key] ? 1 : -1;
        } else { // sort by name, year or duration, in ascending order
            descCB.checked = false;
            return a[key] > b[key] ? 1 : -1;
        }
    });

    renderMovies();

} // end sortMovies() 