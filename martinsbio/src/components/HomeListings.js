import {Link} from "react-router-dom";

import MovieCard from "./MovieCard";

export default function Listings({fetchedMovies, timeStamp, setBookingObject}) {

    function filter(fetchedMovies, timeStamp) {
        let afterCurrentDate = fetchedMovies.filter(movie => movie.date === timeStamp.date);     
        if (afterCurrentDate.length === 0) {
            return false;
        }
        return afterCurrentDate;
    }

    let arrayOfMovies = filter(fetchedMovies, timeStamp)

    return (
        <section className="listingContainer">
            {arrayOfMovies
                ? arrayOfMovies.map(movieObject => <MovieCard
                    key={movieObject.id}
                    movieObject={movieObject}
                    timeStamp={timeStamp}
                    setBookingObject={setBookingObject}/>)
                : <p>No movies currently airing today! Try our
                    <Link to="/search">Search</Link>
                </p>}
        </section>
    )
}
