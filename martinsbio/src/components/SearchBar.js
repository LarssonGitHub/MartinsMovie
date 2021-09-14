export default function Home({searchQuary, setSearchQuary, clearSearchQuaryState}) {

    const handleChange = event => {
        let {name, value} = event.target;
        if (event.target.type === "checkbox") {
            value = event.target.checked;
        }
        setSearchQuary(spreadObject => ({
            ...spreadObject,
            [name]: value === String
                ? value.toLowerCase()
                : value
        }));
    };

    return (
        <nav>
            <h2>Search movies</h2>
            <label htmlFor="textInput">
                Name of movie:
            </label>
            <input
                name="searchQuaryText"
                id="textInput"
                type="text"
                value={searchQuary.text}
                onInput={handleChange}/>
            <br/>
            < label htmlFor="sortByInput">
                Order by:
            </label>
            <span>
                <input
                    name="searchQuaryOrder"
                    id="sortByInput"
                    type="radio"
                    value={"startDate"}
                    onInput={handleChange}/>
                Start Date
                <input
                    name="searchQuaryOrder"
                    id="sortByInput"
                    type="radio"
                    value={"startTime"}
                    onInput={handleChange}/>
                Start Time
                <input
                defaultChecked 
                    name="searchQuaryOrder"
                    id="sortByInput"
                    type="radio"
                    value={"showAll"}
                    onInput={handleChange}/>
                Show all
            </span>
            <br/>
            < label htmlFor="dateInput">
                Search Specific date
            </label>
            <input
                type="date"
                id="dateInput"
                name="searchQuaryDate"
                value={searchQuary.date}
                onInput={handleChange}/> {/* search after time.. */}

            < label htmlFor="timeInput">
                Search what time
            </label>
            <input
                type="time"
                id="timeInput"
                name="searchQuaryTime"
                value={searchQuary.time}
                onInput={handleChange}/>
            <br/>

            < label htmlFor="checkBoxAired">
                Show already aried viewings
            </label>
            <input
                type="checkbox"
                id="checkBoxAired"
                name="searchQuaryAried"
                checked={searchQuary.airing}
                onChange={handleChange}/>

            <br/>
            < label htmlFor="checkBoxSeats">
                Show fully booked viewings
            </label>
            <input
                type="checkbox"
                id="checkBoxSeats"
                name="searchQuarySeats"
                checked={searchQuary.seats}
                onChange={handleChange}/>
            <br/>
            <span className="fakeHyperlink" onClick={() => clearSearchQuaryState()}>Reset search</span>
        </nav>
    )
}
