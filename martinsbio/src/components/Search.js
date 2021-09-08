import {useState} from "react";

import SearchBar from "./SearchBar"
import SearchListings from "./SearchListings"

export default function Search(props) {
    const {fetchedMovies, timeStamp, setBookingObject} = props;

    const [searchQuary,
        setSearchQuary] = useState({searchQuaryText: "", searchQuaryDate: "",  searchQuaryAried: false, searchQuarySeats: false});

    return (
        <main>
            <h1>Our offering</h1>
            <section>
                <SearchBar searchQuary={searchQuary} setSearchQuary={setSearchQuary}/> {console.log(searchQuary)}
            </section>
            <section>
                <h2>Results:</h2>
                {(fetchedMovies) && (timeStamp.date || timeStamp.time)
                    ? <SearchListings fetchedMovies={fetchedMovies} timeStamp={timeStamp} searchQuary={searchQuary} setBookingObject={setBookingObject}/>
                    : <h1>Loading</h1>}

            </section>
        </main>
    );
}