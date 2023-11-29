const movies = [ 

  { 
    name: "2001: A Space Odyssey", 
    year: 1968, 
    duration: 149, 
    genres: ["Sci-Fi" , "Adventure"], 
    director: "Stanley Kubrick", 
    oscars: {won: 1, nom: 4}, 
    tomatometer: 92, 
  },

  { 
    name: "Ali", 
    year: 2001, 
    duration: 157, 
    genre: ["Biography", "Drams", "Sport"],
    director: "Michael Man", 
    oscars: {won: 0, nom: 2}, 
    tomatometer: 68, 
  },

  { 
    name: "Avengers: Endgame", 
    year: 2019, 
    duration: 181, 
    genres: ["Action", "Adventure", "Sci-Fi"], 
    director: "Anthony Russo, Joe Russo", 
    oscars: {won: 1, nom: 1}, 
    tomatometer: 94 
  },

  { 
    name: "The Ballad of Buster Scruggs", 
    year: 2018, 
    duration: 132, 
    genres: ["Comedy", "Drama", "Musical"], 
    director: "Joel Coen, Ethan Coen", 
    oscars: {won: 0, nom: 3}, 
    tomatometer: 91 
  },

  { 
    name: "A Beautiful Mind", 
    year: 2001, 
    duration: 135, 
    genres: ["Biography", "Drama"], 
    director: "Ron Howard", 
    oscars: {won: 4, nom: 8}, 
    tomatometer: 75 
  },

  { 
    name: "Beverly Hills Cop", 
    year: 1984, 
    duration: 105, 
    genres: ["Action", "Comedy", "Crime"], 
    director: "Martin Brest", 
    oscars: {won: 0, nom: 1}, 
    tomatometer: 83 
  },

  { 
    name: "Black Panther", 
    year: 2018, 
    duration: 134, 
    genres: ["Action", "Adventure", "Sci-Fi"], 
    director: "Ryan Coogler", 
    oscars: {won: 3, nom: 7}, 
    tomatometer: 96 
  },

  { 
    name: "Avatar", 
    year: 2009, 
    duration: 162, 
    genres: ["Action", "Adventure", "Fantasy"], 
    director: "James Cameron", 
    oscars: {won: 3, nom: 9}, 
    tomatometer: 81 
  },

  { 
    name: "City Lights", 
    year: 1931, 
    duration: 87, 
    genres: ["Comedy", "Drama", "Romance"], 
    director: "Charlie Chaplin", 
    oscars: {won: 0, nom: 0}, 
    tomatometer: 98 
  },

  { 
    name: "A Clockwork Orange", 
    year: 1971, 
    duration: 136, 
    genres: ["Crime", "Drama", "Sci-Fi"], 
    director: "Stanley Kubrick", 
    oscars: {won: 0, nom: 4}, 
    tomatometer: 87 
  },

 { 
  name: "The Count of Monte Cristo", 
  year: 2002, 
  duration: 131, 
  genres: ["Action", "Adventure", "Drama"], 
  director: "Kevin Reynolds", 
  oscars: {won: 0, nom: 0}, 
  tomatometer: 86 
 },

  { 
    name: "The Deer Hunter", 
    year: 1978, 
    duration: 183, 
    genres: ["Drama", "War"], 
    director: "Michael Cimino", 
    oscars: {won: 5, nom: 9}, 
    tomatometer: 94 
  },

  { 
    name: "Due Date", 
    year: 2010, 
    duration: 95, 
    genres: ["Comedy", "Drama"], 
    director: "Todd Phillips", 
    oscars: {won: 0, nom: 0}, 
    tomatometer: 40 
  },

  { 
    name: "E.T. the Extra-Terrestrial", 
    year: 1982, 
    duration: 115, 
    genres: ["Family", "Sci-Fi"], 
    director: "Steven Spielberg", 
    oscars: {won: 4, nom: 9}, 
    tomatometer: 98 
  },

  { 
    name: "Fight Club", 
    year: 1999, 
    duration: 139, 
    genres: ["Drama"], 
    director: "David Fincher", 
    oscars: {won: 0, nom: 1}, 
    tomatometer: 79 
  },

  { 
    name: "Forrest Gump", 
    year: 1994, 
    duration: 142, 
    genres: ["Drama", "Romance"], 
    director: "Robert Zemeckis", 
    oscars: {won: 6, nom: 13}, 
    tomatometer: 72 
  },

  { 
    name: "Ghost", 
    year: 1990, 
    duration: 127, 
    genres: ["Drama", "Fantasy", "Romance"], 
    director: "Jerry Zucker", 
    oscars: {won: 2, nom: 5}, 
    tomatometer: 74
  },

  { 
    name: "Gladiator", 
    year: 2000, 
    duration: 155, 
    genres: ["Action", "Adventure", "Drama"], 
    director: "Ridley Scott", 
    oscars: {won: 5, nom: 12}, 
    tomatometer: 77 
  },

  { 
    name: "The Godfather", 
    // make these 3 keys dynamically w JS:
    // noArticle: "Godfather",
    // fileName: "the-godfather.jpg",
    year: 1972, 
    duration: 175, 
    // hm: '2h 55m',
    genres: ["Crime", "Drama"], 
    director: "Francis Ford Coppola", 
    oscars: {won: 3, nom: 11}, 
    tomatometer: 92 
  },

  { 
    name: "The Godfather, Part II", 
    year: 1974, 
    duration: 202, 
    genres: ["Crime", "Drama"], 
    director: "Francis Ford Coppola", 
    oscars: {won: 6, nom: 11}, 
    tomatometer: 97 
  },

  { 
    name: "Goodfellas", 
    year: 1990, 
    duration: 145, 
    genres: ["Biography", "Crime", "Drama"], 
    director: "Martin Scorsese", 
    oscars: {won: 1, nom: 6}, 
    tomatometer: 96 
  },

  { 
    name: "The Grapes of Wrath", 
    year: 1940, 
    duration: 129, 
    genres: ["Drama"], 
    director: "John Ford", 
    oscars: {won: 2, nom: 7}, 
    tomatometer: 100 
  },

  { 
    name: "It's a Wonderful Life", 
    year: 1946, 
    duration: 130, 
    genres: ["Drama", "Family", "Fantasy"], 
    director: "Frank Capra", 
    oscars: {won: 0, nom: 5}, 
    tomatometer: 94 
  },

  { 
    name: "Lawrence of Arabia", 
    year: 1962, 
    duration: 227, 
    genres: ["Adventure", "Biography", "Drama"], 
    director: "David Lean", 
    oscars: {won: 7, nom: 10}, 
    tomatometer: 97 
  },

  { 
    name: "A League of Their Own", 
    year: 1992, 
    duration: 128, 
    genres: ["Comedy", "Drama", "Sport"], 
    director: "Penny Marshall", 
    oscars: {won: 0, nom: 2}, 
    tomatometer: 78 
  },

  { 
    name: "Lillies of the Field", 
    year: 1963, 
    duration: 94, 
    genres: ["Drama"], 
    director: "Ralph Nelson", 
    oscars: {won: 1, nom: 5}, 
    tomatometer: 86 
  },

  { 
    name: "Look Who's Talking", 
    year: 1993, duration: 
    93, genres: ["Comedy", "Romance"], 
    director: "Amy Heckerling", 
    oscars: {won: 0, nom: 0}, 
    tomatometer: 57 
  },

  { 
    name: "A Place in the Sun", 
    year: 1951, 
    duration: 122, 
    genres: ["Drama", "Film-Noir", "Romance"], 
    director: "George Stevens", 
    oscars: {won: 6, nom: 9}, 
    tomatometer: 95 
  },

  { 
    name: "Rock of Ages", 
    year: 2012, 
    duration: 136, 
    genres: ["Comedy", "Drama", "Musical"], 
    director: "Adam Shankman", 
    oscars: {won: 0, nom: 0}, 
    tomatometer: 41 
  },

  { 
    name: "Roman Holiday", 
    year: 1953, 
    duration: 118, 
    genres: ["Comedy", "Drama", "Romance"], 
    director: "William Wyler", 
    oscars: {won: 3, nom: 10}, 
    tomatometer: 98 
  },

  { 
    name: "The Shining", 
    year: 1980, 
    duration: 144, 
    genres: ["Drama", "Horror"], 
    director: "Stanley Kubrick", 
    oscars: {won: 0, nom: 2}, 
    tomatometer: 84 
  },

  { 
    name: "Singin' in the Rain", 
    year: 1952, 
    duration: 103, 
    genres: ["Comedy", "Musical", "Romance"], 
    director: "Stanley Donen, Gene Kelly", 
    oscars: {won: 0, nom: 2}, 
    tomatometer: 94 
  },

  { 
    name: "The Warriors", 
    year: 1979, 
    duration: 90, 
    genres: ["Action", "Crime", "Thriller"], 
    director: "Walter Hill", 
    oscars: {won: 0, nom: 0}, 
    tomatometer: 89 
  },

  { 
    name: "Wedding Crashers", 
    year: 2005, 
    duration: 119, 
    genres: ["Comedy", "Romance"], 
    director: "David Dobkin", 
    oscars: {won: 0, nom: 0}, 
    tomatometer: 75 
  },

  { 
    name: "The Wizard of Oz", 
    year: 1939, 
    duration: 101, 
    genres: ["Adventure", "Family", "Fantasy"], 
    director: "Victor Fleming", 
    oscars: {won: 2, nom: 6}, 
    tomatometer: 98 
  },

  { 
    name: "Terminator 2: Judgment Day", 
    year: 1991, 
    duration: 137, 
    genres: ["Action", "Sci-Fi"], 
    director: "James Cameron", 
    oscars: {won: 4, nom: 6}, 
    tomatometer: 94 
  },

  { 
    name: "The Wolf of Wall Street", 
    year: 2013, 
    duration: 180, 
    genres: ["Biography", "Comedy", "Crime"], 
    director: "Martin Scorsese", 
    oscars: {won: 0, nom: 5}, 
    tomatometer: 78 
  },

  { 
    name: "The Usual Suspects", 
    year: 1995, 
    duration: 106, 
    genres: ["Crime", "Drama", "Mystery"], 
    director: "Bryan Singer", 
    oscars: {won: 2, nom: 2}, 
    tomatometer: 89 
  },

  { 
    name: "The Silence of the Lambs", 
    year: 1991, 
    duration: 118, 
    genres: ["Crime", "Drama", "Thriller"], 
    director: "Jonathan Demme", 
    oscars: {won: 5, nom: 7}, 
    tomatometer: 96 
  },

  { 
    name: "The Matrix", 
    year: 1999, 
    duration: 136, 
    genres: ["Action", "Sci-Fi"],
    director: "Lana Wachowski, Lilly Wachowski", 
    oscars: {won: 4, nom: 4}, 
    tomatometer: 88 
  },

  { 
    name: "Casablanca", 
    year: 1942, 
    duration: 102, 
    genres: ["Drama", "Romance", "War"], 
    director: "Michael Curtiz", 
    oscars: {won: 3, nom: 5}, 
    tomatometer: 99 
  },

  { 
    name: "Sunset Boulevard", 
    year: 1950, 
    duration: 110, 
    genres: ["Drama", "Film-Noir"], 
    director: "Billy Wilder", 
    oscars: {won: 3, nom: 11}, 
    tomatometer: 98 
  },

  { 
    name: "Star Wars", 
    year: 1977, 
    duration: 121, 
    genres: ["Action", "Adventure", "Fantasy"], 
    director: "George Lucas", 
    oscars: {won: 6, nom: 10}, 
    tomatometer: 92 
  },

  { 
    name: "Modern Times", 
    year: 1936, 
    duration: 87, 
    genres: ["Comedy", "Drama", "Family"], 
    director: "Charlie Chaplin", 
    oscars: {won: 0, nom: 0}, 
    tomatometer: 98 
  },

  { 
    name: "Mr. Smith Goes to Washington", 
    year: 1939, 
    duration: 129, 
    genres: ["Drama"], 
    director: "Frank Capra", 
    oscars: {won: 0, nom: 5}, 
    tomatometer: 97 
  },

  { 
    name: "Raiders of the Lost Ark", 
    year: 1981, 
    duration: 115, 
    genres: ["Action", "Adventure"], 
    director: "Steven Spielberg", 
    oscars: {won: 2, nom: 5}, 
    tomatometer: 93 
  },

  { 
    name: "Apocalypse Now", 
    year: 1979, 
    duration: 153, 
    genres: ["Drama", "War"], 
    director: "Francis Ford Coppola", 
    oscars: {won: 2, nom: 8}, 
    tomatometer: 88 
  },

  { 
    name: "Barry Lyndon", 
    year: 1975, 
    duration: 185, 
    genres: ["Drama", "Adventure", "War"], 
    director: "Stanley Kubrick", 
    oscars: {won: 4, nom: 7}, 
    tomatometer: 87 
  },

];