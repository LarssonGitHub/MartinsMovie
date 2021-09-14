import MovieCard from "./MovieCard";

export default function Listings(props) {
    const {fetchedMovies, timeStamp, searchQuary, setBookingObject, setMessage} = props;

    function filterMovies(fetchedMovies, timeStamp, searchQuary) {

        let filterMovies = fetchedMovies;

        if (searchQuary.searchQuaryOrder !== "showAll") {
            if (searchQuary.searchQuaryOrder === "startDate") {
                const sortByAiredDate = filterMovies.sort((x, y) => x.date.replaceAll("-", "") - y.date.replaceAll("-", ""));
                filterMovies = sortByAiredDate;
            }
            if (searchQuary.searchQuaryOrder === "startTime") {
                const sortByAiredTime = filterMovies.sort((x, y) => x.time.replace(":", "") - y.time.replace(":", ""));
                filterMovies = sortByAiredTime;
        }}

        if (searchQuary.searchQuaryAried === false) {
            const afterAiredDate = filterMovies.filter(movie => movie.date >= timeStamp.date);
            filterMovies = afterAiredDate;
        }
        if (searchQuary.searchQuarySeats === false) {
            const afterUnbooked = filterMovies.filter(movie => movie.seats.includes(true))
            filterMovies = afterUnbooked;
        }
 
        if (searchQuary.searchQuaryText !== "" || searchQuary.searchQuaryDate !== "") {
            const afterSearchQuary = filterMovies.filter(movie => movie.movieName.toLowerCase().includes(searchQuary.searchQuaryText) && movie.date.includes(searchQuary.searchQuaryDate));
            filterMovies = afterSearchQuary;
        }
        if (searchQuary.searchQuaryTime !== "") {
            const afterTime = filterMovies.filter(movie => movie.time >= searchQuary.searchQuaryTime);
            filterMovies = afterTime;
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
                    setMessage={setMessage}/>)
                : <p>There are no movies that matches your search D:
                </p>}
        </section>
    )
}
