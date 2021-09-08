export default function Home({searchQuary, setSearchQuary}) {

    const handleChange = event => {
        let {name, value} = event.target;
        if (event.target.type === "checkbox") {
            value = event.target.checked;
        }
        console.log(name, value);
        setSearchQuary(search => ({
            ...search,
            [name]: value
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

            < label htmlFor="dateInput">
                Search Specific date
            </label>
            <input
                type="date"
                id="dateInput"
                name="searchQuaryDate"
                value={searchQuary.date}
                onInput={handleChange}/> {/* search after time.. */}

            {/* //TODO fix this so value in date is reseted! */}
            {/* <button
                id="myBtn"
                name="searchQuaryDate"
                value={""}
                onClick={handleChange}>Remove set date</button> */}

            <br/>

            < label htmlFor="checkBoxAired">
                Remove already aried viewings
            </label>
            <input
                type="checkbox"
                id="checkBoxAired"
                name="searchQuaryAried"
                checked={searchQuary.airing}
                onChange={handleChange}/>

            <br/>
            < label htmlFor="checkBoxSeats">
                Remove fully booked viewings
            </label>
            <input
                type="checkbox"
                id="checkBoxSeats"
                name="searchQuarySeats"
                checked={searchQuary.seats}
                onChange={handleChange}/>
        </nav>
    )
}
