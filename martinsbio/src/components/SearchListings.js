import MovieCard from "./MovieCard";

export default function Listings(props) {
    const {fetchedMovies, timeStamp, searchQuary, setBookingObject} = props;
    console.log(setBookingObject);
    function filterMovies(fetchedMovies, timeStamp, searchQuary) {

        let filterMovies =  fetchedMovies;

        if (searchQuary.searchQuaryAried === true) {
            const afterUnaired = filterMovies.filter(movie => movie.date >= timeStamp.date);
            filterMovies = afterUnaired;
        }

        if (searchQuary.searchQuarySeats === true) {
            // TODO Fix this... so user can search for seat....
                    console.log("filter out all unbooked....");
        }

        if (searchQuary.searchQuaryText !== "" || searchQuary.searchQuaryDate !== "") {
            const afterSearchQuary = filterMovies.filter(movie => movie.movieName.toLowerCase().includes(searchQuary.searchQuaryText) && movie.date.includes(searchQuary.searchQuaryDate));
             filterMovies = afterSearchQuary;
        }
        if (filterMovies.length === 0) {
            return false;
        }
        return filterMovies;
    }

    let arrayOfMovies = filterMovies(fetchedMovies, timeStamp, searchQuary)

    return (
        <section className="listingContainer">
            {arrayOfMovies
                ? arrayOfMovies.map(movieObject => <MovieCard
                    key={movieObject.id}
                    movieObject={movieObject}
                    timeStamp={timeStamp}
                    setBookingObject={setBookingObject}
                    />)
                : <p>There are no movies that matches your search D: </p>}
        </section>
    )
}
