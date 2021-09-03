import MovieListingsCard from "./MovieListingsCard"

export default function Listnings({movies, setRefresh, searchQuary, setBookingObject}) {
    return (
        <main>
            {console.log("hello from listnings.js")}
            <h2>We don't have any new movies!</h2>
            <button onClick={() => setRefresh(true)}>Refresh</button>
            <section className="listingContainer">
                {/* TODO clean this up bitch! */}
                {movies
                    ? movies.filter(movie => movie.movieName.toLowerCase().includes(searchQuary.searchQuaryText) && movie.date.toLowerCase().includes(searchQuary.searchQuaryDate)).map(obj => <MovieListingsCard
                        key={obj.id}
                        id={obj.id}
                        date={obj.date}
                        time={obj.time}
                        seats={obj.seats}
                        movieName={obj.movieName}
                        runtime={obj.runtime}
                        img={obj.img}
                        movieJsonObject={obj}
                        setBookingObject={setBookingObject}/>)
                    : <div>Looking for movies..</div>}

                {/* TODO Make a refresh movies and sort by time not date!
              https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_time
              */}
            </section>

            <button onClick={() => console.log(searchQuary)}>log quary states</button>
        </main>
    )
}
