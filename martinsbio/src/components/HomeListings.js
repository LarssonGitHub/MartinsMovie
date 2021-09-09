import {Link} from "react-router-dom";

import MovieCard from "./MovieCard";

export default function Listings({fetchedMovies, timeStamp, setBookingObject}) {

    function filter(fetchedMovies, timeStamp) {
        let todaysMovies = fetchedMovies;
        const afterCurrentDate = todaysMovies.filter(movie => movie.date === timeStamp.date);
        todaysMovies = afterCurrentDate
        const afterCurrentTime = todaysMovies.filter(movie => movie.time.replace(":", "") >= timeStamp.time.replace(":", ""));
        todaysMovies = afterCurrentTime
        todaysMovies.sort((x, y) => x.time.replace(":", "") - y.time.replace(":", ""));
        if (afterCurrentTime.length === 0) {
            return false;
        }
        return afterCurrentTime;
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
                : <p>No movies currently airing today! Try our <Link to="/search">Search</Link>
                </p>}
        </section>
    )
}
