import {useHistory} from 'react-router'
import {useState} from "react";
import SearchBar from "./SearchBar"
import SearchListings from "./SearchListings"

export default function Search(props) {
    const {fetchedMovies, timeStamp, setBookingObject, setMessage} = props;
    const history = useHistory()
    function clearSearchQuaryState() {
        const initialSearchQuaryState = {
            searchQuaryText: "",
            searchQuaryDate: "",
            searchQuaryTime: "",
            searchQuaryOrder: "date",
            searchQuaryAried: false,
            searchQuarySeats: false
        }
        setSearchQuary({
            ...initialSearchQuaryState
        });
        // TODO I have no idea how to clean the values on inputs.. So will just...
        // Reload the page.
        history.go(0)
    };

    const [searchQuary,
        setSearchQuary] = useState({searchQuaryText: "", searchQuaryDate: "", searchQuaryTime: "", searchQuaryOrder: "showAll", searchQuaryAried: false, searchQuarySeats: false});

    return (
        <main>
            <h1>Our offering</h1>
            <section>
                <SearchBar
                    searchQuary={searchQuary}
                    setSearchQuary={setSearchQuary}
                    clearSearchQuaryState={clearSearchQuaryState}/>
            </section>
            <section>
                <h2>Results:</h2>
                {(fetchedMovies) && (timeStamp.date || timeStamp.time)
                    ? <SearchListings
                            fetchedMovies={fetchedMovies}
                            timeStamp={timeStamp}
                            searchQuary={searchQuary}
                            setBookingObject={setBookingObject}
                            setMessage={setMessage}/>
                    : <h1>Loading</h1>}

            </section>
        </main>
    );
}