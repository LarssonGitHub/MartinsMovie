import MovieCard from "./MovieCard";

export default function Listings({fetchedMovies, timeStamp, searchQuery, setBookingObject, setMessage}) {

    let newArrayOfMoviesAfterFiltering = fetchedMovies

    const {
        queryTitle,
        queryDate,
        queryTime,
        querySort,
        removeAlreadyAired,
        removeFullSeats
    } = searchQuery;
// Går det här att göra med en swich statement istället?
    if (removeAlreadyAired) {
        function checkIfTimeOnCurrentDayHasPassed(movieObject) { //Bra funktionsnamn!
            return movieObject.date === timeStamp.date ? movieObject.time.replace(":", "") >= timeStamp.time
                .replace(":", "") : movieObject ;
        }
        newArrayOfMoviesAfterFiltering = newArrayOfMoviesAfterFiltering.filter(movie => movie.date >= timeStamp.date && checkIfTimeOnCurrentDayHasPassed(movie));
    }

    if (removeFullSeats) {
        newArrayOfMoviesAfterFiltering = newArrayOfMoviesAfterFiltering.filter(movie => movie.seats.includes(true));
    }

    if (queryTitle) {
        newArrayOfMoviesAfterFiltering = newArrayOfMoviesAfterFiltering.filter(movie => movie.movieName.toLowerCase().includes(queryTitle));
    }

    if (queryDate) {
        newArrayOfMoviesAfterFiltering = newArrayOfMoviesAfterFiltering.filter(movie => movie.date.includes(queryDate));
    }

    if (queryTime) {
        newArrayOfMoviesAfterFiltering = newArrayOfMoviesAfterFiltering.filter(movie => movie.time >= queryTime);
    }

    if (querySort !== "showAll") {
        if (querySort === "startDate") {
            newArrayOfMoviesAfterFiltering = newArrayOfMoviesAfterFiltering.sort((x, y) => x.date.replaceAll("-", "") - y.date.replaceAll("-", ""));
        }
        if (querySort === "startTime") {
            newArrayOfMoviesAfterFiltering = newArrayOfMoviesAfterFiltering.sort((x, y) => x.time.replace(":", "") - y.time.replace(":", ""));
        }
    }

    if (newArrayOfMoviesAfterFiltering.length === 0) {
        newArrayOfMoviesAfterFiltering = false;
    }

    return (
        <section className="listingContainer">
            {newArrayOfMoviesAfterFiltering
                ? newArrayOfMoviesAfterFiltering.map(movie => <MovieCard
                    key={movie.id}
                    movie={movie}
                    timeStamp={timeStamp}
                    setBookingObject={setBookingObject}
                    setMessage={setMessage}/>)
                : <p>There are no movies that matches your search D:
                </p>}
        </section>
    )
}
