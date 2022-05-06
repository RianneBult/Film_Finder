const listMovies = document.getElementById("list-movies");
const radioButtons = document.querySelectorAll("input[name=movie-filter]");
const searchBar = document.getElementById("searchBar");

const addMoviesToDom = (movies) => {
    movies.forEach(movie => {
        const a = document.createElement("a");
        a.href = "https://www.imdb.com/title/" + movie.imdbID;
        a.target = "_blank";
        listMovies.append(a);
        const moviePoster = document.createElement("img");
        moviePoster.src = movie.poster;
        a.append(moviePoster);
    })
}

addMoviesToDom(movies);

const filterMovies = (wordInMovies) => {
    const movieFilter = movies.filter(movie => movie.title.includes(wordInMovies));
    addMoviesToDom(movieFilter);
}

const filterLatestMovies = () => {
    const getLatestMovies = movies.filter(movie => movie.year >= 2014);
    addMoviesToDom(getLatestMovies);
}

const handleOnChangeEvent = (event) => {
    listMovies.querySelectorAll("img").forEach(e => e.remove());

    switch (event.target.value) {
        case "latest-movies":
            filterLatestMovies();
            break;
        case "avenger-movies":
            filterMovies("Avengers");
            break;
        case "x-men-movies":
            filterMovies("X-Men");
            break;
        case "princess-movies":
            filterMovies("Princess");
            break;
        case "batman-movies":
            filterMovies("Batman");
            break;
        default:
            addMoviesToDom(movies);
    }
}

radioButtons.forEach(e => e.addEventListener("change", handleOnChangeEvent));

searchBar.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const searchMovieTitle = movies.filter(movie => {
        return movie.title.toLowerCase().includes(value);
    })
    listMovies.querySelectorAll("img").forEach(e => e.remove());
    addMoviesToDom(searchMovieTitle);
})
